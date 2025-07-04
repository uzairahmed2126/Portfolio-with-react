import React from "react";
import "./style.css";

function ColorChanger({ isDark, setIsDark, checkedColor }) {
  const toggleSwitch = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <div id="color-changer-container">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDark}
          onChange={toggleSwitch}
        />
        <div
          className={`w-11 h-6  peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-600 
                      peer-checked:after:translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-0.5 after:left-[2px] ${checkedColor} after:border-gray-300 
                      after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}
        ></div>
      </label>
    </div>
  );
}

export default ColorChanger;
