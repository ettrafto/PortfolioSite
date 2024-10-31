import React, { useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import noise from "./PerlinNoise";
import profileImg from './profile.JPG';
import './PerlinNoise.css'

const generateNoisePath = (cx, cy, r, resolution, t, nInt, nAmp) => {
  let path = "";
  for (let a = 0; a <= Math.PI * 2; a += Math.PI * 2 / resolution) {
    const xOff = Math.cos(a) * nInt;
    const yOff = Math.sin(a) * nInt;
    const noiseVal = noise(xOff + t, yOff + t) * nAmp + 1;
    const x = cx + Math.cos(a) * r * noiseVal;
    const y = cy + Math.sin(a) * r * noiseVal;
    path += `${a === 0 ? "M" : "L"}${x},${y} `;
  }
  path += "Z";
  return path;
};

const PerlinNoiseCircle = ({ resolution = 2060, nInt = 3.3, nAmp = 0.12 }) => {
  const [t, setT] = useState(0);
  const [path, setPath] = useState("");
  const [size, setSize] = useState({ width: 400, height: 400, r: 160 });

const updateSize = () => {
  const newWidth = window.innerWidth * 0.5;
  const newHeight = window.innerWidth * 0.27;
  const newR = Math.min(newWidth, newHeight) * 0.75; // Reduce multiplier for better fitting
  setSize({ width: newWidth, height: newHeight, r: newR });
};


  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    setPath(generateNoisePath(size.width / 2, size.height / 2, size.r, resolution, t, nInt, nAmp));
  }, [t, size, resolution, nInt, nAmp]);

  useAnimationFrame(() => {
    setT(t + 0.02);
  });

  return (
    <div className='' style={{ position: "relative", width: size.width, height: size.height*1.7 }}>
      <svg width={size.width} height={size.height*1.7} viewBox={`0 0 ${size.width} ${size.height}`}>
        <motion.path
          d={path}
          fill="black"
          stroke="black"
          strokeWidth="1"
          animate={{ pathLength: [1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%)`,
          width: 2 * (size.r * 0.8),
          height: 2 * (size.r * 0.8),
          borderRadius: "50%",
          backgroundImage: `url(${profileImg})`,
          backgroundSize: "cover",
          zIndex: 2,
          border: "1px solid black"
        }}
      ></div>
    </div>
  );
};

export default PerlinNoiseCircle;
