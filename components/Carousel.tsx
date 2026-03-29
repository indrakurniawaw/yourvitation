"use client";

import { useState } from "react";

const slides = [
  "/demo.png",
    "/demo.png",
    "/demo.png",
];

export default function PhoneCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col items-center">
    <div className="relative w-[800px] md:w-[920px] mx-auto">

  {/* SCREEN */}
  <div className="absolute top-[10%] left-[36%] w-[28%] h-[80%] overflow-hidden rounded-[30px]">
    <img
      src="/demo.png"
      className="w-full h-full object-cover"
    />
  </div>

  {/* FRAME */}
  <img
    src="/phone.png"
    className="relative w-full z-10 drop-shadow-2xl"
  />

</div>

      {/* indicator */}
      <div className="flex gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
