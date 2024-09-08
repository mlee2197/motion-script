"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useIsMobile from "@/hooks/useIsMobile";
import clsx from "clsx";
import { shuffleArray } from "@/misc/utils";

const HEADER_COLORS = ["#E6974E", "#E64E4E", "#FFFFFF"];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [initialAnimation, setInitialAnimation] = useState(true);
  const [particles, setParticles] = useState<{
    left: { x: number; y: number }[];
    right: { x: number; y: number }[];
  }>({ left: [], right: [] });

  useEffect(() => {
    const numParticles = 30;
    const generateParticles = () => {
      const particles = [];
      const maxWidth = Math.min(window.innerWidth * 1.25, 1440);
      const maxHeight = Math.min(window.innerHeight / 1.5, 664 / 2);

      for (let i = 0; i < numParticles; i++) {
        const angle =
          Math.random() * Math.PI + (Math.random() < 0.5 ? 0 : Math.PI);
        const x = Math.cos(angle) * maxWidth;
        const y = (Math.random() > 0.5 ? -1 : 1) * maxHeight;

        particles.push({ x, y });
      }

      // Separate particles into left and right groups
      const leftParticles = shuffleArray(particles);
      const rightParticles = shuffleArray(particles);

      setParticles({ left: leftParticles, right: rightParticles });
    };

    generateParticles();
  }, []);

  // particles animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const leftParticleElements = gsap.utils.toArray(
        ".left-particle"
      ) as HTMLElement[];
      const rightParticleElements = gsap.utils.toArray(
        ".right-particle"
      ) as HTMLElement[];

      const particleDuration = 6;
      const stagger = 0.25;

      const animateParticles = (particles: HTMLElement[]) => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(particles, {
          opacity: 1,
          duration: particleDuration,
          x: 0,
          y: 0,
          scale: 0,
          ease: "circ.out",
          stagger: stagger,
        });
      };

      animateParticles(rightParticleElements);
      gsap.delayedCall(rightParticleElements.length * stagger, () => {
        animateParticles(leftParticleElements);
      });
    }, containerRef);
    return () => ctx.revert();
  }, [particles]);

  // Get mouse position for header animation
  useEffect(() => {
    if (!containerRef.current || isMobile || initialAnimation) return;
    const container = containerRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
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
        headers.forEach(async (header, index) => {
          await tl.fromTo(
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
              xSet(mouse.x);
              ySet(mouse.y);
            });
          });
        });
      }
      gsap.set(headers, { opacity: 1 });
    }, containerRef);
    return () => context.revert();
  }, [mouse, isMobile, initialAnimation]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen max-h-[664px] w-full overflow-hidden"
    >
      {particles.left.map((particle, index) => (
        <div
          key={`left-${index}-particle`}
          className={clsx(
            "particle left-particle",
            index % 3 === 0 ? "plus" : index % 3 === 1 ? "box" : "circle"
          )}
          style={{ translate: `${particle.x}px ${particle.y}px` }}
        />
      ))}
      {particles.right.map((particle, index) => (
        <div
          key={`right-${index}-particle`}
          className={clsx(
            "particle right-particle",
            index % 3 === 0 ? "plus" : index % 3 === 1 ? "box" : "circle"
          )}
          style={{ translate: `${particle.x}px ${particle.y}px` }}
        />
      ))}
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
          <span className="relative block -left-8 md:left-0">Motion</span>{" "}
          <span className="relative block left-8 md:left-[92px]">Script</span>
        </h1>
      ))}
      <h2
        className="absolute w-max bottom-[10%] left-1/2 -translate-x-1/2 text-gray-500 opacity-0 animate-fadeIn md:hidden"
        style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
      >
        best experience on desktop
      </h2>
    </div>
  );
};

export default Hero;
