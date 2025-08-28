import { HOBBIES } from "../data/hobbies";

/**
 * Hobbies Section
 *
 * Displays personal hobbies and interests categorized into groups.
 * Includes hover scroll effect for items and responsive layout for mobile portrait/landscape.
 */
export const Hobbies = () => {
  return (
    <section
      id="hobbies"
      className="min-h-screen bg-[#080807] text-[#D1D1C7] px-4 sm:px-8 md:px-16 py-16"
    >
      <div className="h-[40vh] hidden md:block"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-full mx-auto">
        {/* LEFT SIDE: Image */}
        <div className="justify-center md:justify-start hidden md:block">
          <img
            src="images/hobbies.png"
            alt="Hobbies"
            className="max-w-full w-full object-cover md:max-w-xl"
          />
        </div>

        {/* RIGHT SIDE: Heading + Hobbies */}
        <div className="flex flex-col space-y-8 md:space-y-12">
          <h2 className="font-inconsolata font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[1] bg-[#080807] pb-2 text-center md:text-left">
            Hobbies & Interests
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {HOBBIES.map((hobby, idx) => (
              <div key={idx} className="flex flex-col space-y-2 sm:space-y-4">
                <h3 className="text-xl sm:text-xl md:text-2xl font-bold border-b border-gray-700 pb-1 sm:pb-2">
                  {hobby.category}
                </h3>

                <ul className="space-y-1 sm:space-y-2">
                  {hobby.items.map((item, i) => (
                    <li
                      key={i}
                      className="relative h-[1.5rem] overflow-hidden px-2 sm:px-3 py-0.5 text-md sm:text-md group"
                    >
                      <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2 cursor-default">
                        <div>{item}</div>
                        <div>{item}</div>
                      </div>
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
