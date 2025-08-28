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
      className="min-h-screen bg-[#080807] text-[#D1D1C7] px-4 sm:px-8 lg:px-16 py-16"
    >
      <div className="h-[40vh] hidden lg:block"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-full mx-auto">
        {/* LEFT SIDE: Image */}
        <div className="justify-center lg:justify-start hidden lg:block">
          <img
            src="images/hobbies.png"
            alt="Hobbies"
            className="max-w-full w-full object-cover lg:max-w-xl"
          />
        </div>

        {/* RIGHT SIDE: Heading + Hobbies */}
        <div className="flex flex-col space-y-8 lg:space-y-12">
          <h2 className="font-inconsolata font-bold text-3xl sm:text-4xl lg:text-5xl lg:text-6xl uppercase leading-[1] bg-[#080807] pb-2 text-center lg:text-left">
            Hobbies & Interests
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {HOBBIES.map((hobby, idx) => (
              <div key={idx} className="flex flex-col space-y-2 sm:space-y-4">
                <h3 className="text-xl sm:text-xl lg:text-2xl font-bold border-b border-gray-700 pb-1 sm:pb-2">
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
