"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "@/lib/preloader.json"; // Import JSON animation

const Preloader = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(false), 200);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        color: "#ffffff",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#19191E",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        opacity: isLoading ? 1 : 0,
        transition: "opacity 0.5s ease",
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      <Player
        src="/images/preloader.json" // Ensure correct path
        autoplay
        loop
        style={{ width: 100, height: 100 }}
      />
    </div>
  );
};

export default Preloader;
