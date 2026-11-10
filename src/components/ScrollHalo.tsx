"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

/*
 * The iridescent ring from the hero travels with the visitor: it drifts to a side of each
 * section, spinning and tilting on the way, and finally settles around the 3D globe in Contact.
 */

const BASE = 500; // rendered size in px before scaling
const SPRING = { stiffness: 70, damping: 20, mass: 0.9 };
const SECTIONS = ["about", "tech", "projects", "work"];

type Pose = { cx: number; cy: number; size: number; rotate: number; opacity: number };
type Key = { at: number; pose: Pose; attached?: boolean };

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smoothstep = (t: number) => t * t * (3 - 2 * t);

// Document position that ignores CSS transforms (sections fade up with a translate).
function documentOffset(el: HTMLElement) {
  let x = 0;
  let y = 0;
  for (let node: HTMLElement | null = el; node; node = node.offsetParent as HTMLElement | null) {
    x += node.offsetLeft;
    y += node.offsetTop;
  }
  return { x, y };
}

/** Scroll positions where the ring holds a pose, from the hero down to the globe. */
function buildKeys(): Key[] | null {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const sections = SECTIONS.map((id) => document.getElementById(id));
  const globe = document.querySelector<HTMLElement>("[data-halo-target]");
  if (sections.some((el) => !el) || !globe) return null;

  const size = (fraction: number, min: number, max: number) => clamp(fraction * vw, min, max);
  // Between the hero and the globe the ring rests half off-screen, alternating sides, so it frames
  // the content instead of sitting behind the text. Phones push it further out and fainter.
  const narrow = vw < 768;
  const left = narrow ? -0.1 * vw : -0.03 * vw;
  const right = narrow ? 1.1 * vw : 1.03 * vw;
  const sideOpacity = narrow ? 0.45 : 0.6;
  const heroSize = size(0.35, 240, 500);
  const poses: Pose[] = [
    { cx: vw * 1.055 - heroSize / 2, cy: 64 + heroSize / 2, size: heroSize, rotate: 0, opacity: 0.75 },
    { cx: left, cy: vh * 0.58, size: size(0.3, 200, 440), rotate: 120, opacity: sideOpacity },
    { cx: right, cy: vh * 0.42, size: size(0.32, 220, 460), rotate: 240, opacity: sideOpacity },
    { cx: left, cy: vh * 0.4, size: size(0.26, 200, 400), rotate: 360, opacity: sideOpacity },
    { cx: right, cy: vh * 0.6, size: size(0.3, 200, 440), rotate: 480, opacity: sideOpacity },
  ];

  const globeOffset = documentOffset(globe);
  const globeCenter = { x: globeOffset.x + globe.offsetWidth / 2, y: globeOffset.y + globe.offsetHeight / 2 };
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - vh);
  const attachAt = clamp(globeCenter.y - vh / 2, 0, maxScroll);

  // A pose is reached when its section's top is 35% down the screen and held until the next
  // section approaches; the trip takes at most half a screen of scrolling and 60% of the gap.
  const starts = [0, ...sections.map((el) => documentOffset(el as HTMLElement).y - vh * 0.35)];
  const keys: Key[] = [];
  poses.forEach((pose, i) => {
    const previous = keys.length ? keys[keys.length - 1].at : 0;
    const start = Math.max(previous, starts[i]);
    const next = Math.max(start, i + 1 < poses.length ? starts[i + 1] : attachAt);
    const trip = Math.min(vh * 0.5, (next - start) * 0.6);
    keys.push({ at: start, pose }, { at: next - trip, pose });
  });
  keys.push({
    at: Math.max(keys[keys.length - 1].at, attachAt),
    // Ring band sits just outside the globe's atmosphere; cy is in page coordinates here.
    pose: { cx: globeCenter.x, cy: globeCenter.y, size: globe.offsetWidth * 1.42, rotate: 600, opacity: 0.9 },
    attached: true,
  });
  return keys;
}

/** Ring pose on screen for a scroll position, plus the tilt it takes while travelling. */
function evaluate(keys: Key[], scroll: number) {
  const last = keys[keys.length - 1];
  if (scroll >= last.at) return { pose: { ...last.pose, cy: last.pose.cy - scroll }, tilt: 0 };
  if (scroll <= keys[0].at) return { pose: keys[0].pose, tilt: 0 };

  let i = 0;
  while (i < keys.length - 2 && scroll >= keys[i + 1].at) i++;
  const from = keys[i];
  const to = keys[i + 1];
  const span = to.at - from.at;
  const t = span > 0 ? clamp((scroll - from.at) / span, 0, 1) : 1;
  const target = to.attached ? { ...to.pose, cy: to.pose.cy - to.at } : to.pose;
  const e = smoothstep(t);
  return {
    pose: {
      cx: lerp(from.pose.cx, target.cx, e),
      cy: lerp(from.pose.cy, target.cy, e),
      size: lerp(from.pose.size, target.size, e),
      rotate: lerp(from.pose.rotate, target.rotate, e),
      opacity: lerp(from.pose.opacity, target.opacity, e),
    },
    tilt: from.pose === to.pose ? 0 : Math.sin(Math.PI * t) * 50,
  };
}

function Ring({ spin }: { spin: boolean }) {
  return (
    <>
      <div className="absolute inset-[-16%] rounded-full bg-[radial-gradient(closest-side,rgba(145,94,255,0.28),rgba(145,94,255,0)_72%)]" />
      <div className={`halo-ring absolute inset-0 rounded-full blur-[9px] ${spin ? "animate-spin-slow" : ""}`} />
    </>
  );
}

export default function ScrollHalo() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const keysRef = useRef<Key[] | null>(null);
  const { scrollY } = useScroll();

  const x = useSpring(0, SPRING);
  // Vertical position is sprung in page coordinates, so the ring floats behind while scrolling
  // and, once settled around the globe, moves with the page without any lag.
  const pageY = useSpring(0, SPRING);
  const y = useTransform([pageY, scrollY], ([page, scroll]: number[]) => page - scroll - BASE / 2);
  const scale = useSpring(0.7, SPRING);
  const rotate = useSpring(0, SPRING);
  const rotateX = useSpring(0, SPRING);
  const opacity = useSpring(0, { stiffness: 40, damping: 20 });

  const update = useCallback(
    (scroll: number, immediate: boolean) => {
      const keys = keysRef.current;
      if (!keys) return;
      const { pose, tilt } = evaluate(keys, scroll);
      const go = (value: typeof x, target: number) => (immediate ? value.jump(target) : value.set(target));
      go(x, pose.cx - BASE / 2);
      go(pageY, pose.cy + scroll);
      go(scale, pose.size / BASE);
      go(rotate, pose.rotate + scroll * 0.03);
      go(rotateX, tilt);
      opacity.set(pose.opacity);
    },
    [x, pageY, scale, rotate, rotateX, opacity]
  );

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || reduceMotion) return;
    let frame = 0;
    const measure = (immediate: boolean) => {
      keysRef.current = buildKeys();
      update(window.scrollY, immediate);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => measure(false));
    };
    measure(true);
    window.addEventListener("resize", schedule);
    // Page height changes as fonts and images load.
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, [mounted, reduceMotion, update]);

  useMotionValueEvent(scrollY, "change", (scroll) => update(scroll, false));

  if (!mounted) return null;

  // Reduced motion: the ring stays put in the hero, as a still decoration.
  if (reduceMotion) {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] overflow-hidden">
        <div className="absolute -right-[5.5vw] top-16 aspect-square w-[clamp(240px,35vw,500px)] opacity-75">
          <Ring spin={false} />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[500px] w-[500px] will-change-transform"
      style={{ x, y, scale, opacity }}
    >
      <motion.div className="absolute inset-0" style={{ rotate, rotateX, transformPerspective: 900 }}>
        <Ring spin />
      </motion.div>
    </motion.div>
  );
}
