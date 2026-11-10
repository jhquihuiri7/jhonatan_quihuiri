"use client";

import { Suspense, useEffect, useMemo, useRef, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { GeoLocation } from "@/types/portfolio";

// Turns the globe so the marker sits a little left of center, leaving South America in view.
const BASE_ROTATION = -0.22;

// drei's Html raycasts the whole scene to decide whether the label is hidden behind
// something, so decorative meshes opt out and only the Earth itself can hide the label.
const ignoreRaycast = () => null;

/** Point on a sphere for a latitude/longitude, matching the UV layout of three.js spheres. */
function latLonToVector(lat: number, lon: number, radius = 1) {
  const phi = THREE.MathUtils.degToRad(lon + 180);
  const theta = THREE.MathUtils.degToRad(90 - lat);
  return new THREE.Vector3(
    -radius * Math.cos(phi) * Math.sin(theta),
    radius * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function Atmosphere() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 glowColor;
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
            gl_FragColor = vec4(glowColor * intensity, intensity);
          }
        `,
        uniforms: { glowColor: { value: new THREE.Color("#6D7BFF") } },
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
      }),
    []
  );
  useEffect(() => () => material.dispose(), [material]);

  return (
    <mesh scale={1.16} material={material} raycast={ignoreRaycast}>
      <sphereGeometry args={[1, 64, 64]} />
    </mesh>
  );
}

function Pin({
  location,
  earthRef,
  animate,
}: {
  location: GeoLocation;
  earthRef: RefObject<THREE.Mesh>;
  animate: boolean;
}) {
  const ringRef = useRef<THREE.Mesh>(null);
  const { position, quaternion } = useMemo(() => {
    const normal = latLonToVector(location.lat, location.lon).normalize();
    return {
      position: normal.clone().multiplyScalar(1.002),
      quaternion: new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal),
    };
  }, [location.lat, location.lon]);

  // Pulse that spreads out from the pin every two seconds.
  useFrame(({ clock }) => {
    const ring = ringRef.current;
    if (!ring) return;
    const t = animate ? (clock.getElapsedTime() % 2) / 2 : 0.3;
    ring.scale.setScalar(1 + t * 2.4);
    (ring.material as THREE.MeshBasicMaterial).opacity = 0.9 * (1 - t);
  });

  // The group's local Y axis points straight out of the surface.
  return (
    <group position={position} quaternion={quaternion}>
      <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.003, 0]} raycast={ignoreRaycast}>
        <ringGeometry args={[0.018, 0.026, 48]} />
        <meshBasicMaterial color="#FF4F9A" transparent depthWrite={false} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0.004, 0]} raycast={ignoreRaycast}>
        <sphereGeometry args={[0.014, 16, 16]} />
        <meshBasicMaterial color="#ED0762" toneMapped={false} />
      </mesh>
      {/* Label with a stem that always points straight down at the island, whatever the rotation */}
      <Html position={[0, 0.02, 0]} occlude={[earthRef]} zIndexRange={[10, 0]} pointerEvents="none">
        <div aria-hidden="true" className="flex -translate-x-1/2 -translate-y-full flex-col items-center pb-1.5">
          <div className="whitespace-nowrap rounded-xl border border-white/[0.15] bg-night-900/90 px-3 py-2 text-center shadow-lg">
            <p className="text-[13px] font-semibold leading-tight text-white">{location.name}</p>
            <p className="mt-0.5 text-xs leading-tight text-lilac-300">{location.region}</p>
          </div>
          <span className="h-9 w-0.5 rounded-full bg-gradient-to-b from-brand-rose to-brand-pink" />
        </div>
      </Html>
    </group>
  );
}

function Earth({ location, animate, onReady }: { location: GeoLocation; animate: boolean; onReady?: () => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const earthRef = useRef<THREE.Mesh>(null);
  const [map, bumpMap] = useTexture(["/globe/earth-blue-marble.jpg", "/globe/earth-topology.jpg"], (textures) => {
    const [color] = textures as THREE.Texture[];
    color.colorSpace = THREE.SRGBColorSpace;
    color.anisotropy = 8;
  });

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  // Slow sway that keeps the Galápagos in view.
  useFrame(({ clock }) => {
    if (!groupRef.current || !animate) return;
    groupRef.current.rotation.y = BASE_ROTATION + Math.sin(clock.getElapsedTime() * 0.25) * 0.35;
  });

  return (
    <group ref={groupRef} rotation={[0, BASE_ROTATION, 0]}>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 96, 96]} />
        <meshStandardMaterial map={map} bumpMap={bumpMap} bumpScale={0.03} roughness={0.85} metalness={0} />
      </mesh>
      <Pin location={location} earthRef={earthRef} animate={animate} />
    </group>
  );
}

type Globe3DProps = {
  location: GeoLocation;
  /** Renders frames only while the globe is on screen. */
  active: boolean;
  onReady?: () => void;
};

export default function Globe3D({ location, active, onReady }: Globe3DProps) {
  const { animate, interactive } = useMemo(
    () => ({
      animate: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      // Dragging is for mouse users; on touch screens a swipe should keep scrolling the page.
      interactive: window.matchMedia("(pointer: fine)").matches,
    }),
    []
  );

  return (
    <Canvas
      camera={{ position: [0, 0.15, 3.3], fov: 42 }}
      dpr={[1, 2]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, alpha: true }}
      style={{ cursor: interactive ? "grab" : "default" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[-3, 2, 4]} intensity={2.2} />
      <Suspense fallback={null}>
        <Earth location={location} animate={animate} onReady={onReady} />
      </Suspense>
      <Atmosphere />
      {interactive && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      )}
    </Canvas>
  );
}
