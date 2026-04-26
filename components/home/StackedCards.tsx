"use client";

import { useEffect, useState } from "react";

type StackedCardsProps = {
  images: string[];
  intervalMs?: number;
};

type CardStyle = {
  zIndex: number;
  opacity: number;
  transform: string;
};

function getStyleForOffset(offset: number): CardStyle {
  if (offset === 0) {
    return {
      zIndex: 3,
      opacity: 1,
      transform: "rotate(0deg) scale(1) translate(0,0)",
    };
  }
  if (offset === 1) {
    return {
      zIndex: 2,
      opacity: 0.85,
      transform: "rotate(3deg) scale(0.95) translate(10px,10px)",
    };
  }
  if (offset === 2) {
    return {
      zIndex: 1,
      opacity: 0.6,
      transform: "rotate(-2deg) scale(0.9) translate(-8px,18px)",
    };
  }
  return {
    zIndex: 0,
    opacity: 0,
    transform: "scale(0.85)",
  };
}

export default function StackedCards({
  images,
  intervalMs = 3000,
}: StackedCardsProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const handle = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(handle);
  }, [images.length, intervalMs]);

  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: "4 / 3" }}
      aria-hidden="true"
    >
      {images.map((image, index) => {
        const offset = (index - active + images.length) % images.length;
        const style = getStyleForOffset(offset);
        return (
          <div
            key={image}
            className="absolute inset-0 overflow-hidden rounded-[20px]"
            style={{
              ...style,
              boxShadow: "0 24px 64px -12px rgba(50,36,118,.18)",
              transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        );
      })}
    </div>
  );
}
