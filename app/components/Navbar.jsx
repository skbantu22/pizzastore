"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", active: true },
    { name: "Menu" },
    { name: "Build Your Own", badge: "NEW" },
    { name: "Our Story" },
    { name: "Gallery" },
    { name: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white border-b border-white/10">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* LOGO */}
        <div className="leading-none">
          <h1 className="font-black text-xl tracking-widest">S'MASHED</h1>
          <p className="text-[10px] text-gray-400 tracking-[0.35em] text-center">
            -LDN-
          </p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
          {navItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className={`transition hover:text-orange-500 flex items-center gap-2 ${
                item.active ? "text-orange-500" : ""
              }`}
            >
              {item.name}

              {item.badge && (
                <span className="bg-orange-600 text-[9px] px-1 py-[2px] rounded">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* ORDER BUTTON */}
        <div className="hidden lg:block">
          <button className="border border-orange-500 text-orange-500 px-5 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-black transition">
            Order Now
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-black border-t border-white/10 ${
          open ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 text-[12px] font-bold uppercase tracking-widest">
          {navItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center gap-2 hover:text-orange-500 transition"
              onClick={() => setOpen(false)}
            >
              {item.name}

              {item.badge && (
                <span className="bg-orange-600 text-[9px] px-1 py-[2px] rounded">
                  {item.badge}
                </span>
              )}
            </a>
          ))}

          <button className="mt-4 border border-orange-500 text-orange-500 px-4 py-2 text-[11px] font-bold uppercase hover:bg-orange-500 hover:text-black transition">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
