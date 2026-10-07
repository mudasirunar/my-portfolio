import React from "react";

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* Subtle Dot-Matrix Mesh Pattern with Radial Mask */}
      <div className="absolute inset-0 bg-grid-mesh opacity-35" />

      {/* Atmospheric Glowing Gradient Orbs (GPU-accelerated, soft slow-drift) */}
      {/* Orb 1: Hero / Top Left — Electric Indigo */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-ambient-float"
        style={{ willChange: "transform" }}
      />

      {/* Orb 2: Upper Mid / Right — Electric Cyan */}
      <div
        className="absolute top-[22%] -right-28 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[130px] animate-ambient-float"
        style={{ animationDelay: "5s", willChange: "transform" }}
      />

      {/* Orb 3: Projects Section / Mid Left — Vibrant Teal */}
      <div
        className="absolute top-[55%] -left-32 w-[580px] h-[580px] rounded-full bg-teal/15 blur-[140px] animate-ambient-float"
        style={{ animationDelay: "10s", willChange: "transform" }}
      />

      {/* Orb 4: Experience & Contact / Bottom Right — Rich Violet */}
      <div
        className="absolute bottom-[-10%] -right-24 w-[560px] h-[560px] rounded-full bg-purple/15 blur-[130px] animate-ambient-float"
        style={{ animationDelay: "15s", willChange: "transform" }}
      />
    </div>
  );
}
