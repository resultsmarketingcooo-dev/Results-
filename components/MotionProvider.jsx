"use client";

import { MotionConfig } from "motion/react";

// Honours each visitor's "reduce motion" setting across every animation.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
