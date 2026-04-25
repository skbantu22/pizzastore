"use client";

export default function BottomSection() {
  return (
    <div className="bg-black text-white p-4 md:p-8 ">
      {/* TOP ROW */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* DISCOUNT */}
        <div className="bg-zinc-900 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2">
              GET 20% OFF YOUR FIRST ORDER
            </h2>
            <p className="text-gray-400 text-sm mb-3">
              Sign up for early access, exclusive offers and updates.
            </p>

            <div className="flex gap-2">
              <input
                placeholder="Enter your email"
                className="bg-black border border-zinc-700 px-3 py-2 rounded w-full"
              />
              <button className="bg-orange-500 px-4 rounded text-sm font-semibold">
                UNLOCK
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            className="w-40 rounded-lg"
          />
        </div>

        {/* FOLLOW JOURNEY */}
        <div className="bg-zinc-900 rounded-xl p-5">
          <h2 className="text-xl font-bold mb-3">FOLLOW OUR JOURNEY</h2>

          <div className="flex gap-2 overflow-x-auto">
            {[
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
              "https://images.unsplash.com/photo-1550547660-d9450f859349",
              "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5",
              "https://images.unsplash.com/photo-1551024601-bec78aea704b",
              "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* FIND US */}
        <div className="bg-zinc-900 p-5 rounded-xl">
          <h3 className="text-lg font-bold mb-3 text-orange-500">FIND US</h3>

          <p className="text-sm text-gray-400 mb-3">
            147 Hackney Road, London, E2 8JL <br />
            Serving Hackney, Shoreditch & nearby areas.
          </p>

          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=13&size=400x200&key=YOUR_API_KEY"
            className="rounded-lg mb-3"
          />

          <button className="border border-zinc-600 px-3 py-2 rounded text-sm">
            SEE ON MAP
          </button>
        </div>

        {/* DELIVERY */}
        <div className="bg-zinc-900 p-5 rounded-xl">
          <h3 className="text-lg font-bold mb-3 text-orange-500">
            DELIVERING TO YOU
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            Order your favourites delivered fast & fresh.
          </p>

          <div className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Uber_Eats_2020_logo.svg"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Deliveroo_logo.svg"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/03/Just_Eat_Takeaway.com_logo.svg"
              className="h-8"
            />
          </div>
        </div>

        {/* OPENING */}
        <div className="bg-zinc-900 p-5 rounded-xl">
          <h3 className="text-lg font-bold mb-3 text-orange-500">
            OPENING SUMMER 2026
          </h3>

          <p className="text-gray-400 text-sm mb-3">
            Be the first to know when we open.
          </p>

          <div className="flex gap-2 mb-4">
            <input
              placeholder="Enter your email"
              className="bg-black border border-zinc-700 px-3 py-2 rounded w-full"
            />
            <button className="bg-orange-500 px-3 rounded">→</button>
          </div>

          <div className="flex gap-3 text-xl">
            <span>🎵</span>
            <span>📸</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 text-xs pt-4 border-t border-zinc-800">
        Privacy Policy | Terms & Conditions
      </div>
    </div>
  );
}
