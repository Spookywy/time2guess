"use client";

import { useEffect, useRef } from "react";
import { Snowflake } from "./types";

export function FallingSnowAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const snowflakes: Snowflake[] = [];
    const numSnowflakes = Math.floor(window.innerWidth / 10);

    for (let i = 0; i < numSnowflakes; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() + 0.5,
        drift: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((flake) => {
        // Draw snowflake
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();

        // Update position
        flake.y += flake.speed;
        flake.x += flake.drift;

        // Reset snowflake when it goes off screen
        if (flake.y > canvas.height) {
          flake.y = -10;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width) {
          flake.x = 0;
        } else if (flake.x < 0) {
          flake.x = canvas.width;
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const widthRatio = window.innerWidth / canvas.width; // canvas.width is the old width
      snowflakes.forEach((flake) => {
        flake.x *= widthRatio;
      });
      setCanvasSize(); // Update canvas size after adjusting snowflakes positions
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
  );
}
