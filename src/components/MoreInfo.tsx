"use client";
import React, { useState } from 'react';

interface MoreInfoProps {
  children: React.ReactNode;
}

const MoreInfo: React.FC<MoreInfoProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="w-5 h-5 rounded-full bg-gray-300 text-gray-800 flex items-center justify-center text-sm font-bold hover:bg-gray-200 transition-colors"
        aria-label="More information"
        onClick={toggleOverlay}
      >
        i
      </button>
      {isOpen && (
        <div className="absolute inset-0 mb-8 bg-black bg-opacity-80 flex items-center justify-center p-8 z-10">
          <div className="relative w-full h-full overflow-auto text-white">
            {children}
            <button
              className="absolute top-0 right-0 text-white hover:text-gray-300"
              onClick={toggleOverlay}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MoreInfo;
