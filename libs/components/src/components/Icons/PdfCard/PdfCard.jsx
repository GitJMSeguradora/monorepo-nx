import React from 'react';

const Pdf = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32">
    <g fill="none" fillRule="evenodd">
      <path
        stroke="#96F"
        strokeWidth="1.7"
        d="M1.895.85h14.434c.234.001.44.15 1.097.834l5.055 5.032c.452.445.67.876.669 1.36v21.638c0 .825-.507 1.436-1.045 1.436H1.895c-.538 0-1.045-.611-1.045-1.436V2.286C.85 1.46 1.357.85 1.895.85z"
      />
      <text
        fill="#96F"
        fontFamily="Metropolis"
        fontSize="10"
        fontWeight="600"
        letterSpacing="-.2"
      >
        <tspan x="3.985" y="20">
          pdf
        </tspan>
      </text>
    </g>
  </svg>
);

export default Pdf;
