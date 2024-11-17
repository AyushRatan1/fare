"use client";
import React, { useRef, useEffect, useState } from "react";

const Intro = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0); // For parallax effect
  const [isVideoEnded, setIsVideoEnded] = useState(false); // To check if video ended

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * 0.8; // Adjust speed factor for parallax
        setParallaxOffset(offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleVideoEnd = () => {
    setIsVideoEnded(true); // Set video end state when the video ends
    if (videoRef.current) {
      videoRef.current.pause(); // Pause video when it ends
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        src="/int2.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        onEnded={handleVideoEnd} // Trigger video end handler
      />

      {/* VED AI Text */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translateY(${parallaxOffset - 150}px)`, // Move text higher based on scroll
          opacity: isVideoEnded ? 1 : 1, // Fade-in effect after video ends
          transition: "opacity 1s ease-in-out",
        }}
      >
        <h1
          className="text-white text-9xl font-bold"
          style={{
            fontFamily: "CustomNeoFont, sans-serif", // Use custom font
          }}
        >
          VED AI
        </h1>
      </div>
    </div>
  );
};

export default Intro;
