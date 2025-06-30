"use client";

import { Megaphone } from "lucide-react";

export default function RunningText({ text }: { text: string }) {
  return (
    <div className="fixed top-0 left-0 w-full z-50 py-2 px-0 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white shadow font-semibold">
      <div className="relative flex items-center overflow-hidden h-7">
        {/* Icon */}
        <span className="flex items-center justify-center bg-black/20 rounded-full w-7 h-7 mr-2">
          <Megaphone className="w-4 h-4" />
        </span>
        {/* Animated text */}
        <span className="relative w-full overflow-hidden">
          <span className="inline-block whitespace-nowrap animate-marquee text-sm md:text-base">
            {text}
          </span>
        </span>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
