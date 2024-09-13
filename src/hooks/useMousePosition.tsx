import { useEffect, useRef, useState } from "react";

const useMousePosition = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const container = ref.current;
        if (!container) return;
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top } = container.getBoundingClientRect();
            const x = clientX - left;
            const y = clientY - top;
            setMouse({ x, y });
        };
    
        container.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          container.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);
    
    return { ref, mouseX: mouse.x, mouseY: mouse.y };
};

export default useMousePosition;