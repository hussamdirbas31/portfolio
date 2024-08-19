'use client'
import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

interface ToggleButtonProps {
  toggleSidebar: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ toggleSidebar }) => {
  return (
    <button onClick={toggleSidebar} className="p-2 relative right-2 text-black bg-white rounded-full">
      <RxHamburgerMenu size={20} />
    </button>
  );
};

export default ToggleButton;
