
import React from "react";

const GymBanner = () => {
  return (
    <div className="relative w-full max-w-2xl overflow-hidden rounded-lg">
      <div className="bg-teal-300 h-full p-8 relative">
        {/* Wavy lines */}
        <div className="absolute left-0 top-1/3 w-full">
          <div className="flex flex-col space-y-2">
            <div className="h-2 bg-black w-32 rounded-full"></div>
            <div className="h-2 bg-black w-40 rounded-full"></div>
            <div className="h-2 bg-black w-36 rounded-full"></div>
          </div>
        </div>
        <div className="absolute right-0 top-2/3 w-full">
          <div className="flex flex-col items-end space-y-2">
            <div className="h-2 bg-black w-32 rounded-full"></div>
            <div className="h-2 bg-black w-40 rounded-full"></div>
            <div className="h-2 bg-black w-36 rounded-full"></div>
          </div>
        </div>
        
       
        
        {/* Text content */}
        <div className="text-center pt-10 pb-24">
          <h2 className="text-5xl font-black text-black">GYM</h2>
          <h2 className="text-4xl font-bold text-black">FITNESS</h2>
          <p className="text-sm font-medium text-black mt-2">MAKE YOUR SELF</p>
          <p className="text-3xl font-black text-black">STRONG</p>
        </div>
        
       
      </div>
    </div>
  );
};

export default GymBanner;
