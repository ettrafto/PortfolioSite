import React from 'react';

const VennDiagram = () => {
  const CustomCircle = ({ x, y, fill }) => (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="50" cy="50" r="50" fill={"#00000000"} stroke='black' strokeWidth={'4px'} opacity="1" />
    </g>
  );

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <svg width="400" height="300" viewBox="0 0 400 300">
        {/* Circles */}
        <CustomCircle x={100} y={100} />
        <CustomCircle x={160} y={100} />
        <CustomCircle x={130} y={50} />

        {/* Labels */}
        <text x={115} y={170} fontSize="14" fontWeight="bold" fill="#000">
          Code
        </text>
        <text x={205} y={170} fontSize="14" fontWeight="bold" fill="#000">
          Design
        </text>
        <text x={155} y={85} fontSize="14" fontWeight="bold" fill="#000">
          Creative
        </text>

        {/* Center Label */}
        <text x={167} y={142} fontSize="18" fontWeight="bold" fill="#000">
          ME
        </text>
      </svg>
    </div>
  );
};

export default VennDiagram;
