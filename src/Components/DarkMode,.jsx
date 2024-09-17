import React, { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const DarkMode = () => {
  const [dark, setDark] = useState(false);

  // Check localStorage for the dark mode state on component mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setDark(true);
      document.body.classList.add("dark");
    } else {
      setDark(false);
      document.body.classList.remove("dark");
    }
  }, []);

  const darkModeHandler = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    if (newDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <div className="fixed top-1/4 -right-1 z-3">
      <span className="relative inline-block rotate-90">
        {/* Checkbox controlling the dark mode */}
        <input
          type="checkbox"
          className="checkbox opacity-0 absolute"
          id="chk"
          checked={dark}
          onChange={darkModeHandler}
        />

        <label
          className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
          htmlFor="chk"
        >
          <IoMoon className={`${dark ? "text-gray-400" : "text-white"}`} />
          <IoSunny className={`${dark ? "text-yellow-500" : "text-gray-400"}`} />
          
          {/* The ball that moves when dark mode is toggled */}
          <span
            className={`ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] w-6 h-6 transform transition-transform ${
              dark ? "translate-x-[1.75rem]" : "translate-x-[0]"
            }`}
          ></span>
        </label>
      </span>
    </div>
  );
};

export default DarkMode;
