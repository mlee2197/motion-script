"use client";
import useMousePosition from "@/hooks/useMousePosition";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Shapes = () => {
  const { ref, mouseX, mouseY } = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);

  const setX = cursorRef.current
    ? gsap.quickTo(cursorRef.current, "x", { duration: 0.3 })
    : null;
  const setY = cursorRef.current
    ? gsap.quickTo(cursorRef.current, "y", { duration: 0.3 })
    : null;

  useEffect(() => {
    if (!setX || !setY) return;
    setX(mouseX);
    setY(mouseY);
  }, [mouseX, mouseY, setX, setY]);

  return (
    <div
      id="cursor-animation"
      ref={ref}
      className="animation-container grid grid-cols-3 grid-rows-2 p-2"
    >
      <div className="shape">
        <div className="triangle" />
      </div>
      <div className="shape">
        <div className="square" />
      </div>
      <div className="shape">
        <div className="pentagon" />
      </div>
      <div className="shape">
        <div className="hexagon" />
      </div>
      <div className="shape">
        <div className="heptagon" />
      </div>
      <div className="shape">
        <div className="octagon" />
      </div>
      <div
        ref={cursorRef}
        className="cursor"
      />
    </div>
  );
};

export default Shapes;
