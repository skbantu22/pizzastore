"use client";

import React, { useState } from "react";

const MEAL_DATA = {
  desserts: [
    { id: "brownie", name: "Chocolate Brownie", price: 2.99, img: "🍫" },
    { id: "cheesecake", name: "NY Cheesecake", price: 2.99, img: "🍰" },
    { id: "cookie", name: "Cookie Dough", price: 2.99, img: "🍪" },
    { id: "choc-shake", name: "Chocolate Milkshake", price: 3.49, img: "🥤" },
    { id: "stray-shake", name: "Strawberry Milkshake", price: 3.49, img: "🍓" },
  ],
};

const MealBuilder2 = () => {
  const [selections, setSelections] = useState({
    main: { name: "Classic Smash Burger", price: 6.99 },
    side: { name: "Loaded Fries", price: 1.5 },
    drink: { name: "Coca-Cola", price: 1.29 },
    dessert: null,
  });

  const calculateTotal = () => {
    const items = [
      selections.main,
      selections.side,
      selections.drink,
      selections.dessert,
    ];
    return items.reduce((acc, item) => acc + (item?.price || 0), 0).toFixed(2);
  };

  return (
    <div className=" bg-black pt-0 px-4  text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4">
        {/* LEFT: DESSERTS */}
        <div className="flex-1 bg-[#0a0a0a] border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-orange-600 text-xl">🧁</span>
            <h2 className="text-white font-bold uppercase tracking-wide">
              ADD A DESSERT
              <span className="text-zinc-500 font-normal normal-case ml-1">
                (OPTIONAL)
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {MEAL_DATA.desserts.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  setSelections((prev) => ({ ...prev, dessert: item }))
                }
                className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
                  selections.dessert?.id === item.id
                    ? "border-orange-600 bg-zinc-900"
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="text-3xl mb-2">{item.img}</div>
                <span className="text-[11px] text-center mb-1">
                  {item.name}
                </span>
                <span className="text-orange-500 text-[11px] font-bold">
                  +£{item.price.toFixed(2)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="w-full lg:w-80 bg-[#0a0a0a] border border-zinc-800 rounded-xl p-6 h-fit sticky top-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-bold uppercase tracking-tight">
              YOUR MEAL
            </h2>
            <button className="text-orange-600 text-xs font-bold hover:underline">
              Edit
            </button>
          </div>

          <div className="space-y-3 mb-6">
            <SummaryItem
              label={selections.main.name}
              price={selections.main.price}
            />
            <SummaryItem
              label={selections.side.name}
              price={selections.side.price}
            />
            <SummaryItem
              label={selections.drink.name}
              price={selections.drink.price}
            />
            {selections.dessert && (
              <SummaryItem
                label={selections.dessert.name}
                price={selections.dessert.price}
              />
            )}
          </div>

          <div className="pt-3 border-t border-zinc-800 flex justify-between items-center mb-4">
            <span className="text-white font-bold text-sm uppercase">
              TOTAL
            </span>
            <span className="text-white font-black text-xl">
              £{calculateTotal()}
            </span>
          </div>

          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-3 rounded-md uppercase tracking-tighter transition-colors">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

const SummaryItem = ({ label, price }) => (
  <div className="flex justify-between text-[13px]">
    <span className="text-zinc-300 truncate pr-4">{label}</span>
    <span className="text-zinc-400 font-medium whitespace-nowrap">
      £{price.toFixed(2)}
    </span>
  </div>
);

export default MealBuilder2;
