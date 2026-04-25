import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden mt-12">
      {/* BACKGROUND OVERLAY (subtle texture/glow) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,115,0,0.15),transparent_60%)]"></div>

      <div className="relative   flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 z-10 px-14 ">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
            <span className="block text-white">LONDON’S</span>
            <span className="block text-white">FINEST SMASH </span>

            <span className="block text-orange-500">BURGERS</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-md text-lg">
            Real ingredients. High heat. Perfect crust. Smash burgers done
            properly in East London.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 font-semibold rounded-md shadow-lg shadow-orange-500/30">
              GET 20% OFF OPENING DAY →
            </button>
            <button className="border border-white/30 px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
              VIEW MENU
            </button>
          </div>

          {/* INFO */}
          <div className="mt-8 text-sm text-gray-400 flex flex-col gap-2">
            <p>📍 147 Hackney Road, East London</p>
            <p className="text-orange-400">🕒 Opening Summer 2026</p>
          </div>
        </div>

        {/* RIGHT SIDE - FULL BLEED IMAGE */}
        <div className="flex-1 relative hidden md:flex justify-end items-center pl-5 ">
          {/* FIRE GLOW */}
          <div className="absolute right-10 bottom-10 w-[400px] h-[400px] bg-orange-500/30 blur-[120px] rounded-full"></div>

          {/* BURGER */}
          <img
            src="/burger.png"
            alt="Burger"
            className="relative z-10 w-[140%] max-w-none object-contain drop-shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
          />

          {/* REFLECTION FLOOR */}
          <div className="absolute bottom-0 w-[80%] h-24 bg-gradient-to-t from-orange-500/30 to-transparent blur-2xl"></div>

          {/* BADGE */}
          {/* BADGE */}
          <div className="absolute top-9 right-11 z-50 flex flex-col items-center justify-center w-28 h-28 rounded-full border border-white/60 bg-black/70 backdrop-blur-md text-white/80 shadow-lg">
            <p className="font-extrabold text-sm tracking-wide text-white/90">
              FRESH
            </p>
            <p className="text-white/90 text-sm font-semibold">Smashed</p>
            <p className="text-white/80 text-xs">To Order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
