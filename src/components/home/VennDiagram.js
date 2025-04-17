import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

// 🌀 Individual Circle Component with animated label
const CircleWithMotion = ({
  label,
  baseX,
  baseY,
  color,
  mousePos,
  labelOffsetX = 0,
  labelOffsetY = 0,
}) => {
  // springs for circle center
  const x = useSpring(baseX, { stiffness: 100, damping: 20 });
  const y = useSpring(baseY, { stiffness: 100, damping: 20 });

  // update springs on mouse move
  useEffect(() => {
    const dx = mousePos.x - baseX;
    const dy = mousePos.y - baseY;
    const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
    const maxOffset = 20;
    const strength = 0.3;

    const offsetX = dx * strength * Math.min(1, maxOffset / distance);
    const offsetY = dy * strength * Math.min(1, maxOffset / distance);

    x.set(baseX + offsetX);
    y.set(baseY + offsetY);
  }, [mousePos, baseX, baseY, x, y]);

  return (
    <g>
      {/* Animated circle */}
      <motion.circle
        cx={x}
        cy={y}
        r="70"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      {/* Animated label with same springs + manual offset */}
      <motion.text
        x={x}
        y={y}
        transform={`translate(${labelOffsetX}, ${labelOffsetY})`}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="14"
        fill="#000"
      >
        {label}
      </motion.text>
    </g>
  );
};

// 🎯 Main Diagram Component
const VennDiagram = () => {
  const svgRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const circles = [
    { label: 'Code', baseX: 140, baseY: 150, color: 'red', labelOffsetX: -30, labelOffsetY: 0 },
    { label: 'Design', baseX: 220, baseY: 150, color: 'green', labelOffsetX: 30, labelOffsetY: 0 },
    { label: 'Creative', baseX: 180, baseY: 90, color: 'blue', labelOffsetX: 0, labelOffsetY: -30 },
  ];

  // springs for the central "ME" label
  const centerBaseX = 180;
  const centerBaseY = 135;
  const centerX = useSpring(centerBaseX, { stiffness: 100, damping: 20 });
  const centerY = useSpring(centerBaseY, { stiffness: 100, damping: 20 });

  // track mouse position inside SVG
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const handleMouseMove = (e) => {
      const rect = svg.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    svg.addEventListener('mousemove', handleMouseMove);
    return () => svg.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // update center label springs on mouse move
  useEffect(() => {
    const dx = mousePos.x - centerBaseX;
    const dy = mousePos.y - centerBaseY;
    const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
    const maxOffset = 20;
    const strength = 0.3;

    const offsetX = dx * strength * Math.min(1, maxOffset / distance);
    const offsetY = dy * strength * Math.min(1, maxOffset / distance);

    centerX.set(centerBaseX + offsetX);
    centerY.set(centerBaseY + offsetY);
  }, [mousePos, centerX, centerY]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 300"
      className="w-full max-w-[600px] h-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      {circles.map((circle, idx) => (
        <CircleWithMotion key={idx} {...circle} mousePos={mousePos} />
      ))}

      {/* Animated central "ME" label */}
      <motion.text
        x={centerX} 
        y={centerY}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="14"
        fill="#000"
      >
        ME
      </motion.text>
    </svg>
  );
};

export default VennDiagram;
