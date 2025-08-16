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
      "Mystery, Adventure, Detective Stories",
      "Biographies & Autobiographies",
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
      className="min-h-screen py-20 bg-gray-200 text-gray-900"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Hobbies & Interests
      </h2>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {hobbies.map((hobby, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{hobby.category}</h3>
            <ul className="list-disc list-inside space-y-1">
              {hobby.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
