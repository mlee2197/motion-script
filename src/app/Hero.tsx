"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useIsMobile from "@/hooks/useIsMobile";
import clsx from "clsx";

const HEADER_COLORS = ["#E6974E", "#E64E4E", "#FFFFFF"];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  const [initialAnimation, setInitialAnimation] = useState(true);

  // particles animation
  useEffect(() => {
    const particleDuration = 6;
    const ctx = gsap.context(() => {
      const particles = gsap.utils.toArray(".particle") as HTMLElement[];
      particles.forEach((particle: HTMLElement, index: number) => {
        const randomX =
          Math.random() < 0.75
            ? Math.max(0.25, Math.random()) * Math.min(window.innerWidth, 1280)
            : Math.min(0.25, Math.random()) *
              Math.min(window.innerWidth, 1280) *
              -1;
        const randomY =
          Math.random() *
          Math.min(window.innerHeight / 1.5, 664 / 2) *
          (Math.random() < 0.5 ? -1 : 1);
        const tl = gsap.timeline({ repeat: -1 });
        tl.from(particle, {
          opacity: 0,
          duration: particleDuration,
          x: randomX,
          y: randomY,
          scale: 1,
          ease: "power2.out",
          delay: index * 0.5,
        });
        tl.to(
          particle,
          {
            opacity: 0,
            duration: particleDuration / 2,
            delay: index * 0.15,
          },
          "<50%"
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Get mouse position for header animation
  useEffect(() => {
    if (!containerRef.current || isMobile || initialAnimation) return;
    const container = containerRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      console.log(x, y);
      setMouse({ x, y });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile, initialAnimation]);

  // Header animation
  useEffect(() => {
    if (!containerRef.current) return;
    const headers = gsap.utils
      .toArray(".hero-header")
      .reverse() as HTMLElement[];

    const context = gsap.context(() => {
      if (initialAnimation) {
        const tl = gsap.timeline({
          onComplete: () => {
            setInitialAnimation(false);
          },
        });
        headers.forEach((header, index) => {
          tl.fromTo(
            header,
            {
              opacity: 0,
              scale: 0,
            },
            {
              opacity: 1,
              scale: 1,
              delay: index * 0.1,
            },
            "<"
          );
        });
      } else if (!isMobile) {
        gsap.ticker.add(() => {
          headers.forEach((header, index) => {
            const xSet = gsap.quickSetter(header, "x", "px");
            const ySet = gsap.quickSetter(header, "y", "px");
            gsap.delayedCall(index * 0.1, () => {
              xSet(mouse.x - 200);
              ySet(mouse.y);
            });
          });
        });
      }
    }, containerRef);
    return () => context.revert();
  }, [mouse, isMobile, initialAnimation]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen max-h-[664px] w-full overflow-hidden"
    >
      {HEADER_COLORS.map((color, index) => (
        <h1
          key={color}
          className="hero-header"
          style={{
            color,
            zIndex: index,
            left: `calc(50% + ${index * 6}px)`,
            top: `calc(50% - ${index * 3}px)`,
          }}
        >
          Motion <span className="block">Script</span>
        </h1>
      ))}
      <h2 className="absolute w-max top-2/3 left-1/2 -translate-x-2/3 opacity-50 md:hidden">
        best experience on desktop
      </h2>
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={`${index}-particle`}
          className={clsx("particle", index % 2 === 0 ? "plus" : "box")}
        />
      ))}
    </div>
  );
};

export default Hero;
