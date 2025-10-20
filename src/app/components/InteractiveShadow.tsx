'use client'
import React, { useState, useRef, useEffect, ReactNode, CSSProperties } from "react";

interface InteractiveShadowProps {
  children: ReactNode;
  color?: string;
  className?: string;
  // Optional customization
  shadowAmountX?: number;
  shadowAmountY?: number;
  baseShadowY?: number;
  imageAmountX?: number;
  imageAmountY?: number;
  transition?: string;
}

export function InteractiveShadow({
  children,
  color = '#fff',
  className = '',
  shadowAmountX = 20,
  shadowAmountY = 10,
  baseShadowY = 20,
  imageAmountX = 5,
  imageAmountY = 5,
  transition = 'transform 1s ease-out',
}: InteractiveShadowProps) {
  const [shadowOffset, setShadowOffset] = useState({ x: 0, y: baseShadowY });
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

      // Shadow offset
      const shadowX = -deltaX * shadowAmountX;
      const shadowY = -deltaY * shadowAmountY + baseShadowY;
      setShadowOffset({ x: shadowX, y: shadowY });

      // Image offset: subtle translate in opposite direction for parallax-like movement
      const imageX = -deltaX * imageAmountX;
      const imageY = -deltaY * imageAmountY;
      setImageOffset({ x: imageX, y: imageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [shadowAmountX, shadowAmountY, baseShadowY, imageAmountX, imageAmountY]);

  // Clone the children to apply the dynamic styles
  const styledChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const element = child as React.ReactElement<{ style?: CSSProperties }>;
      const existingStyle = element.props.style || {};
      return React.cloneElement(element, {
        style: {
          ...existingStyle,
          filter: `drop-shadow(${shadowOffset.x}px ${shadowOffset.y}px ${color})`,
          transform: `translate(${imageOffset.x}px, ${imageOffset.y}px)`,
          transition,
        },
      });
    }
    return child;
  });

  return (
    <div ref={containerRef} className={className}>
      {styledChildren}
    </div>
  );
}