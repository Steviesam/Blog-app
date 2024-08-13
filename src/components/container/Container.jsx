import React from 'react';

function Container({ 
  children, 
  maxWidth = 'max-w-7xl', 
  padding = 'px-4', 
  className = '', 
  bgColor = 'bg-white', 
  shadow = 'shadow-md',
  rounded = 'rounded-lg'
}) {
  return (
    <div 
      className={`w-full ${maxWidth} mx-auto ${padding} ${bgColor} ${shadow} ${rounded} ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
