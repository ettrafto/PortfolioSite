import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

// 🌀 Individual Circle Component with animated label
const CircleWithMotion = ({
  label,
  baseX,
  baseY,
  color,
  mousePos,
  labelOffsetX = 0,
  labelOffsetY = 0,
  r = 70,
}) => {
  const x = useSpring(baseX, { stiffness: 70, damping: 20 });
  const y = useSpring(baseY, { stiffness: 70, damping: 20 });

  useEffect(() => {
    const dx = mousePos.x - baseX;
    const dy = mousePos.y - baseY;
    const distance = Math.max(Math.hypot(dx, dy), 1);
    const maxOffset = 45;
    const strength = 0.5;

    const scale = strength * Math.min(1, maxOffset / distance);
    x.set(baseX + dx * scale);
    y.set(baseY + dy * scale);
  }, [mousePos, baseX, baseY, x, y]);

  return (
    <g>
      <motion.circle cx={x} cy={y} r={r} fill="none" stroke={color || "black"} strokeWidth="2" />
      <motion.text
        x={x}
        y={y}
        transform={`translate(${labelOffsetX}, ${labelOffsetY})`}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="12"
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
  const isMobile = useMediaQuery({ maxWidth: 640 });

  // --- Use the viewBox center as the source of truth ---
  const VBW = 400;
  const VBH = 300;
  const cx = VBW / 2; // 200
  const cy = VBH / 2; // 150

  const r = 70;
  const hOffset = 40;          // horizontal offset from center for left/right circles
  const vOffset = 60;          // vertical offset for the top circle

  // Build circles from the true center (this was the left-leaning issue)
  const circles = [
    { label: 'Technical',   baseX: cx - hOffset, baseY: cy,       color: 'black', labelOffsetX: -30, labelOffsetY: 20, r },
    { label: 'Professional',baseX: cx + hOffset, baseY: cy,       color: 'black', labelOffsetX:  30, labelOffsetY: 20, r },
    { label: 'Creative',    baseX: cx,           baseY: cy - vOffset, color: 'black', labelOffsetX:   0, labelOffsetY: -30, r },
  ];

  // Center of overlap (slightly above cy looks nicer)
  const centerBaseX = cx;
  const centerBaseY = cy - vOffset / 4; // 150 - 15 = 135, matching your previous feel
  const centerX = useSpring(centerBaseX, { stiffness: 100, damping: 20 });
  const centerY = useSpring(centerBaseY, { stiffness: 100, damping: 20 });

  // Track mouse position in SVG coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update center springs
  useEffect(() => {
    const dx = mousePos.x - centerBaseX;
    const dy = mousePos.y - centerBaseY;
    const distance = Math.max(Math.hypot(dx, dy), 1);
    const maxOffset = 45;
    const strength = 0.5;
    const scale = strength * Math.min(1, maxOffset / distance);
    centerX.set(centerBaseX + dx * scale);
    centerY.set(centerBaseY + dy * scale);
  }, [mousePos, centerBaseX, centerBaseY, centerX, centerY]);

  const viewBox = `0 0 ${VBW} ${VBH}`;

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox}
      className="svg"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block', width: '100%', height: 'auto', margin: '0 auto' }}
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
