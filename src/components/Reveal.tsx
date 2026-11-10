"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article";
};

// Fades its content up the first time it scrolls into view.
export default function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const animation = {
    className,
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  } as const;

  return as === "article" ? (
    <motion.article {...animation}>{children}</motion.article>
  ) : (
    <motion.div {...animation}>{children}</motion.div>
  );
}
