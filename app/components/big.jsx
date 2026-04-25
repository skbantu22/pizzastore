"use client";
import React, { useState, useMemo } from "react";

const MEAL_DATA = {
  mains: [
    { id: "classic", name: "Classic Smash", type: "Burger", img: "🍔" },
    { id: "hot-honey", name: "Hot Honey Chicken", type: "Chicken", img: "🍗" },
    { id: "spicy", name: "Spicy Smash", type: "Burger", img: "🔥" },
    { id: "crispy", name: "Crispy Chicken", type: "Chicken", img: "🥪" },
  ],
  sides: [
    { id: "fries", name: "Fries", price: 0, img: "🍟" },
    { id: "loaded", name: "Loaded Fries", price: 1.5, img: "🍟🧀" },
    { id: "onion-rings", name: "Onion Rings", price: 1.0, img: "🧅" },
    { id: "sweet-potato", name: "Sweet Potato Fries", price: 1.5, img: "🍠" },
    { id: "mac-bites", name: "Mac & Cheese Bites", price: 1.0, img: "🧀" },
    { id: "mozzarella", name: "Mozzarella Sticks", price: 1.0, img: "🥖" },
  ],
  drinks: [
    { id: "coke", name: "Coca-Cola", price: 0, color: "bg-red-600" },
    { id: "zero", name: "Coke Zero", price: 0, color: "bg-black" },
    { id: "fanta", name: "Fanta", price: 0, color: "bg-orange-500" },
    { id: "sprite", name: "Sprite", price: 0, color: "bg-green-500" },
    { id: "water", name: "Water", price: 0, color: "bg-blue-300" },
    { id: "redbull", name: "Red Bull", price: 1.0, color: "bg-blue-800" },
  ],
};

const MealBuilder = () => {
  const [selections, setSelections] = useState({
    main: "classic",
    side: "fries",
    drink: "coke",
  });

  // ✅ Safe state update helper
  const updateSelection = (key, value) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  // ✅ Memoized total calculation
  const total = useMemo(() => {
    const sidePrice =
      MEAL_DATA.sides.find((s) => s.id === selections.side)?.price || 0;
    const drinkPrice =
      MEAL_DATA.drinks.find((d) => d.id === selections.drink)?.price || 0;
    return sidePrice + drinkPrice;
  }, [selections]);

  const getItem = (category, id) =>
    MEAL_DATA[category].find((item) => item.id === id);

  const SectionHeader = ({ number, title }) => (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white font-bold text-sm">
        {number}
      </span>
      <h2 className="text-white font-bold uppercase tracking-wide">{title}</h2>
    </div>
  );

  return (
    <div className=" bg-black p-4 md:p-4 font-sans">
      <div className="max-w-7xl mx-auto border border-gray-800 rounded-xl px-4 bg-[#0a0a0a]">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8 text-center">
          <h1 className="text-2xl font-black text-white text-center ">
            MAKE YOUR OWN MEAL
          </h1>
          <span className="bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
            NEW
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* STEP 1 */}
          <section className="lg:border-r border-gray-800 lg:pr-6">
            <SectionHeader number="1" title="Choose Your Main" />
            <div className="grid grid-cols-2 gap-4">
              {MEAL_DATA.mains.map((item) => (
                <button
                  key={item.id}
                  onClick={() => updateSelection("main", item.id)}
                  aria-pressed={selections.main === item.id}
                  className={`group flex flex-col items-center p-3 rounded-lg transition-all ${
                    selections.main === item.id
                      ? "bg-zinc-900 border border-orange-600 scale-105"
                      : "hover:bg-zinc-900 border border-transparent"
                  }`}
                >
                  <div className="text-4xl mb-2 grayscale group-hover:grayscale-0 transition">
                    {item.img}
                  </div>
                  <span className="text-zinc-400 text-[11px] text-center">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* STEP 2 */}
          <section className="lg:border-r border-gray-800 lg:pr-6">
            <SectionHeader number="2" title="Choose Your Side" />
            <div className="grid grid-cols-3 gap-3">
              {MEAL_DATA.sides.map((item) => (
                <button
                  key={item.id}
                  onClick={() => updateSelection("side", item.id)}
                  aria-pressed={selections.side === item.id}
                  className={`flex flex-col items-center p-2 rounded-lg transition ${
                    selections.side === item.id
                      ? "bg-zinc-900 border border-orange-600 scale-105"
                      : "hover:bg-zinc-900 border border-transparent"
                  }`}
                >
                  <div className="text-2xl mb-1">{item.img}</div>
                  <span className="text-zinc-400 text-[10px] text-center">
                    {item.name}
                  </span>
                  {item.price > 0 && (
                    <span className="text-orange-500 text-[10px] font-bold">
                      +${item.price.toFixed(2)}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* STEP 3 */}
          <section>
            <SectionHeader number="3" title="Choose Your Drink" />
            <div className="grid grid-cols-3 gap-4">
              {MEAL_DATA.drinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => updateSelection("drink", item.id)}
                  aria-pressed={selections.drink === item.id}
                  className="flex flex-col items-center group"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-transform group-hover:scale-110 ${item.color} ${
                      selections.drink === item.id
                        ? "ring-2 ring-white ring-offset-2 ring-offset-black"
                        : ""
                    }`}
                  >
                    <span className="text-[8px] text-white font-bold">
                      LOGO
                    </span>
                  </div>
                  <span className="text-zinc-400 text-[10px] text-center">
                    {item.name}
                  </span>
                  {item.price > 0 && (
                    <span className="text-orange-500 text-[10px] font-bold">
                      +${item.price.toFixed(2)}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* ✅ SUMMARY (ChatGPT magic touch) */}
      </div>
    </div>
  );
};

export default MealBuilder;
