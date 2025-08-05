import React from 'react';

const TwitterX = ({ size = 20, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path d="M4.5 4h5l3.75 5.5L17 4h2.5l-6.5 8L21 20h-5.2l-4.3-6.4L6 20H3.5l6.9-8.5L4.5 4z" />
  </svg>
);

export default TwitterX;
