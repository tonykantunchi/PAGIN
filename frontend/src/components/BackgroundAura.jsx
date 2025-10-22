import { useEffect, useState } from "react";

export default function BackgroundAura() {
  const [angle, setAngle] = useState(180);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev >= 360 ? 0 : prev + 0.3));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-[4000ms] ease-linear"
        style={{
          background: `linear-gradient(${angle}deg, #f8d3b0 0%, #f7b47f 25%, #f39663 55%, #eb7754 85%, #d55a42 100%)`,
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,237,210,0.4)_0%,rgba(255,203,164,0.25)_35%,rgba(255,152,98,0.15)_65%,transparent_100%)]" />
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
           style={{
             backgroundImage: `url("https://www.transparenttextures.com/patterns/paper-fibers.png")`,
             backgroundRepeat: "repeat",
             backgroundSize: "400px 400px",
           }}
      ></div>
      <div className="absolute top-[40vh] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-[#f7b47f]/50 blur-[140px] rounded-full opacity-70"></div>
    </div>
  );
}
