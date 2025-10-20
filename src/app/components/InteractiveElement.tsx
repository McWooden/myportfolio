'use client'
import React, { useState, useRef, useEffect, ReactNode, CSSProperties } from "react";

interface InteractiveElementProps {
  children: ReactNode;
  className?: string;
  // Optional customization
  amountX?: number;
  amountY?: number;
  transition?: string;
  id?: string;
}

export function InteractiveElement({
  children,
  className = '',
  amountX = 5,
  amountY = 5,
  transition = 'transform 1s ease-out',
  id = '',
}: InteractiveElementProps) {
  const [imageOffset, setImageOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      let deltaX = (x - centerX) / centerX;
      let deltaY = (y - centerY) / centerY;

      // Clamp deltas to -1 to 1 to prevent extreme offsets
      deltaX = Math.max(-1, Math.min(1, deltaX));
      deltaY = Math.max(-1, Math.min(1, deltaY));

      // Image offset: subtle translate in opposite direction for parallax-like movement
      const imageX = -deltaX * amountX;
      const imageY = -deltaY * amountY;
      setImageOffset({ x: imageX, y: imageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [amountX, amountY]);

  // Clone the children to apply the dynamic styles
  const styledChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const element = child as React.ReactElement<{ style?: CSSProperties }>;
      const existingStyle = element.props.style || {};
      return React.cloneElement(element, {
        style: {
          ...existingStyle,
          transform: `translate(${imageOffset.x}px, ${imageOffset.y}px)`,
          transition,
        },
      });
    }
    return child;
  });

  return (
    <div ref={containerRef} className={className} id={id}>
      {styledChildren}
    </div>
  );
}