import React from 'react';


const StackedText = ({ topText, bottomText }) => {
  return (
    <div className="flex flex-col items-center -space-y-10">
      <div className="text-center text-8xl font-nexa font-bold text-yellow-600 opacity-10">{topText}</div>
      <div className="text-center  text-7xl font-nexa font-bold">{bottomText}</div>
    </div>
  );
};

export default StackedText;
