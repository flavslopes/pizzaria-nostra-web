
import React from 'react';

const CheckerDivider: React.FC = () => {
  return (
    <div className="w-full h-8 flex overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <div 
          key={i} 
          className={`flex-1 h-full ${i % 2 === 0 ? 'bg-[#D64045]' : 'bg-[#2D5A27]'}`}
        />
      ))}
    </div>
  );
};

export default CheckerDivider;
