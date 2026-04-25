export default function BuildYourWay() {
  return (
    <section className="bg-black text-white py-8 px-4">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-6 tracking-wide">
        BUILD IT YOUR WAY
      </h2>

      <div className="grid md:grid-cols-2 gap-4 ">
        {/* Burger Card */}
        <div className="flex items-center bg-zinc-900 rounded-xl p-4 md:p-6 shadow-lg hover:scale-[1.02] transition-transform">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349"
            alt="Burger"
            className="w-28 md:w-36 object-contain mr-4 rounded-lg"
          />

          <div>
            <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
              MAKE YOUR OWN BURGER
              <span className="text-xs bg-orange-500 px-2 py-0.5 rounded">
                NEW
              </span>
            </h3>

            <p className="text-sm text-gray-400 mt-2 mb-4">
              Customise every layer exactly how you like it.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded font-semibold text-sm">
              BUILD YOUR BURGER
            </button>
          </div>
        </div>

        {/* Meal Card */}
        <div className="flex items-center bg-zinc-900 rounded-xl p-4 md:p-6 shadow-lg hover:scale-[1.02] transition-transform">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349"
            alt="Fries Meal"
            className="w-28 md:w-36 object-contain mr-4 rounded-lg"
          />

          <div>
            <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
              MAKE YOUR OWN MEAL
              <span className="text-xs bg-orange-500 px-2 py-0.5 rounded">
                NEW
              </span>
            </h3>

            <p className="text-sm text-gray-400 mt-2 mb-4">
              Choose your main, sides, drink and dessert.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded font-semibold text-sm">
              BUILD YOUR MEAL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
