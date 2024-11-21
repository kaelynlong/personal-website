"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ReducedMotionContextType = {
  isReducedMotion: boolean;
  toggleReducedMotion: () => void;
};

const ReducedMotionContext = createContext<ReducedMotionContextType | undefined>(undefined);

export const ReducedMotionProvider = ({ children }: { children: ReactNode }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const toggleReducedMotion = () => {
    setIsReducedMotion((prev) => !prev);
  };

  return (
    <ReducedMotionContext.Provider value={{ isReducedMotion, toggleReducedMotion }}>
      {children}
    </ReducedMotionContext.Provider>
  );
};

export const useReducedMotion = () => {
  const context = useContext(ReducedMotionContext);
  if (context === undefined) {
    throw new Error("useReducedMotion must be used within a ReducedMotionProvider");
  }
  return context;
};
