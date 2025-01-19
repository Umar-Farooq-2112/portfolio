import React from "react";

const CircularProgressBar = ({ percentage }) => {
  const strokeWidth = 25; // Width of the circular progress stroke
  const radius = 80; // Radius of the circle
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      // style={{ transform: "rotate()" }} // Rotating it clockwise by 90 degrees
    >
      {/* Background Circle */}
      <circle
        stroke="#222"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* Progress Circle */}
      <circle
        stroke="url(#gradient)" // Gradient stroke
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8E2DE2" />
          <stop offset="100%" stopColor="#4A00E0" />
        </linearGradient>
      </defs>
      {/* Percentage Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#fff"
        fontSize="18"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
