"use client";

import dynamic from "next/dynamic";
import { Component, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { homeLocation } from "@/constants";
import GlobeFallback from "./GlobeFallback";

// three.js loads only when the Contact section gets close to the screen.
const Globe3D = dynamic(() => import("./Globe3D"), { ssr: false });

class GlobeErrorBoundary extends Component<{ onError: () => void; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function LocationGlobe() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false); // 3D scene requested
  const [onScreen, setOnScreen] = useState(false); // scene should render frames
  const [ready, setReady] = useState(false); // textures loaded, fallback can fade out
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    if (!supportsWebGL()) {
      setFailed(true);
      return;
    }
    const preload = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          preload.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    const visibility = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    preload.observe(box);
    visibility.observe(box);
    return () => {
      preload.disconnect();
      visibility.disconnect();
    };
  }, []);

  const handleReady = useCallback(() => setReady(true), []);
  const handleError = useCallback(() => setFailed(true), []);

  return (
    <div
      ref={boxRef}
      role="img"
      aria-label={`3D globe with a marker on ${homeLocation.name}, ${homeLocation.region}`}
      data-halo-target=""
      className="relative aspect-square w-[min(420px,92%)]"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${ready && !failed ? "opacity-0" : "opacity-100"}`}
      >
        <GlobeFallback />
      </div>
      {mounted && !failed && (
        <GlobeErrorBoundary onError={handleError}>
          <div className="absolute inset-0">
            <Globe3D location={homeLocation} active={onScreen} onReady={handleReady} />
          </div>
        </GlobeErrorBoundary>
      )}
    </div>
  );
}
