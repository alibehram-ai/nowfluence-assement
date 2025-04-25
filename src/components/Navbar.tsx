
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background/60 ">
      <div className="max-w-screen-2xl  px-4 flex justify-between h-16 items-center">
    
          <div className="flex-shrink-0">
            <span className="text-teal-500 font-medium text-lg">nowfluence</span>
          </div>
          <div className="flex items-center justify-end space-x-2">
         
            <Button variant="outline" className="border-gray-300 border-none">Sign Up</Button>
            <Button variant="link" className="text-cyan-400">Login</Button>
          </div>
        </div>

    </nav>
  );
};

export default Navbar;
