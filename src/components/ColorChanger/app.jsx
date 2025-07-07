import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
import "./style.css";
import { useGSAP } from "@gsap/react";

function ColorChanger({ isDark, setIsDark, checkedColor }) {
  const colorRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: colorRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl.from(colorRef.current, {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      const elements = colorRef.current.querySelector(".label");

      tl.from(
        elements,
        {
          x: 100,
          opacity: 0,
          stagger: 0.15,
          ease: "power2.out",
          duration: 0.8,
        },
        "-=0.5"
      );
    },
    { scope: colorRef }
  );
  const toggleSwitch = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      ref={colorRef}
      id="color-changer-container"
      className="fixed top-4 right-4 z-50"
      style={{
        // These styles help prevent mobile rendering issues
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      <label className="relative inline-flex items-center cursor-pointer label">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDark}
          onChange={toggleSwitch}
        />
        <div
          className={`w-11 h-6 border-2 border-black peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-800 
      peer-checked:after:translate-x-full peer-checked:after:border-white 
      after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
      ${checkedColor} 
      after:border-gray-300 after:border after:rounded-full 
      after:h-5 after:w-5 after:transition-all flex items-center justify-between px-1`}
        >
          {/* 🌞 (Sun) emoji for light mode */}
          <span className="text-xs" style={{ opacity: isDark ? 0 : 1 }}>
            🌞
          </span>

          {/* 🌙 (Moon) emoji for dark mode */}
          <span className="text-xs" style={{ opacity: isDark ? 1 : 0 }}>
            🌙
          </span>
        </div>
      </label>
    </div>
  );
}

export default ColorChanger;
