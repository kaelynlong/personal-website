"use client";

import React from "react";
import { useReducedMotion } from "../context/ReducedMotionContext";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const { isReducedMotion } = useReducedMotion();

  return (
    <div data-reduced-motion={isReducedMotion ? "true" : "false"}>
      {children}
    </div>
  );
}