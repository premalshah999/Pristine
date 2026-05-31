"use client";

import LiquidEther from "@/components/LiquidEther";
import { useTheme } from "@/components/theme-provider";

const lightSage = ["#F0FFF7", "#D7EFE4", "#B7D4C6", "#E2D6AF"];
const darkSage = ["#28453A", "#4F806D", "#91C8AD", "#DFF4E9"];

export function HeroLiquidEther() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? darkSage : lightSage;

  return (
    <LiquidEther
      key={theme}
      colors={colors}
      mouseForce={20}
      cursorSize={100}
      isViscous
      viscous={30}
      iterationsViscous={32}
      iterationsPoisson={32}
      resolution={0.5}
      isBounce={false}
      autoDemo
      autoSpeed={0.5}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={600}
      autoRampDuration={0.6}
    />
  );
}
