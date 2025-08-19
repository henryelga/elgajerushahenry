const hobbies = [
  {
    category: "Rubik's Cube 🧩",
    items: [
      "2x2, 3x3, 4x4, 5x5, 6x6",
      "Mirror Cube",
      "Skewb",
      "Barrel Cube",
      "Pyraminx",
      "Gear Cube",
      "Megaminx",
    ],
  },
  {
    category: "Music 🎵",
    items: ["Piano", "Harmonica", "Ukulele"],
  },
  {
    category: "Reading 📚",
    items: [
      "Mystery",
      "Adventure",
      "Detective Stories",
      "Biographies",
      "Autobiographies",
    ],
  },
  {
    category: "Activities 🎲",
    items: ["Badminton", "Other fun games and puzzles"],
  },
];

export const Hobbies = () => {
  return (
    <section
      id="hobbies"
      className="min-h-screen py-20 bg-[#080807] text-[#D1D1C7] md:px-12"
    >
      <div className="h-[50vh]"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-full mx-auto">
        {/* LEFT SIDE: Image */}
        <div className="flex justify-start">
          <img
            src="/hobbies.png"
            alt="Hobbies"
            className="max-w-xl w-full object-cover"
          />
        </div>

        {/* RIGHT SIDE: Heading + Hobbies */}
        <div className="flex flex-col space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Hobbies & Interests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {hobbies.map((hobby, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                {/* Category title */}
                <h3 className="text-xl md:text-2xl font-bold border-b border-gray-700 pb-2">
                  {hobby.category}
                </h3>

                {/* Items */}
                <ul className="space-y-2">
                  {hobby.items.map((item, i) => (
                    <li
                      key={i}
                      className="px-3 py-1 rounded-lg  shadow text-md"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
