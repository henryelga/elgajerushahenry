/**
 * About Section
 *
 * Displays a brief introduction including name, headline, and a short summary.
 * Designed to be visually prominent with large typography and responsive layout.
 */
export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col text-gray-900 px-6 lg:px-12 py-5"
      style={{ backgroundColor: "#E8E8E3", color: "#171717" }}
    >
      {/* Top Row: Headline */}
      <div className="w-full flex justify-between items-center mb-8 lg:mb-12">
        <div className="text-base lg:text-lg font-semibold text-gray-700 uppercase pl-4 lg:pl-8 scale-x-130">
          Software Developer
        </div>
      </div>

      {/* Full-Width Name */}
      <h1
        className="font-inconsolata font-bold scale-y-120 py-16 
             text-[clamp(3rem,8vw,12.5rem)] 
             uppercase leading-[1] text-center"
      >
        ELGA JERUSHA HENRY
      </h1>

      {/* -------- MOBILE/TABLET VERSION -------- */}
      <div className="flex flex-col gap-10 lg:hidden mt-8">
        {/* Summary + Button */}
        <div className="flex flex-col space-y-6 text-base px-2">
          <p className="text-gray-700 leading-relaxed">
            Final-year Software Development student. Passionate and curious. I
            love solving problems and always push myself to learn and grow.
          </p>
          <a
            href="#contact"
            className="group relative inline-block px-6 py-3 font-bold uppercase rounded-full w-fit overflow-hidden text-[#E8E3E3] bg-[#393632]"
          >
            <span className="absolute inset-0 bg-[#716A63] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
            <span className="relative z-10">Contact ↗</span>
          </a>
        </div>

        {/* About Text */}
        <div className="text-base leading-relaxed text-gray-800">
          <h3 className="text-lg font-extrabold">
            ex - Software Developer @ ABB || Generation Google Scholar '24 ||
            Final Year Software Development Student @ DkIT
          </h3>
          <br />
          <p>
            My journey into software development began in 2020 when I taught
            myself Python through online courses. This sparked my passion for
            technology, led me to explore HTML, CSS, JavaScript, and other
            tools. Now, as I enter my final year of study, I'm eager to refine
            my skills and take the next step toward becoming a well-rounded
            software developer.
          </p>
        </div>
      </div>

      {/* -------- DESKTOP / LAPTOP VERSION -------- */}
      <div className="hidden lg:block relative w-full h-full text-2xl font-semibold">
        <div className="absolute top-[45vh] bottom-0 left-0 right-0 flex justify-between items-end px-12 pb-10 gap-8">
          {/* Left: Short Summary + Contact Button */}
          <div className="flex flex-col space-y-8 max-w-lg">
            <p className="text-gray-700 leading-relaxed">
              Final-year Software Development student. Passionate and curious. I
              love solving problems and always push myself to learn and grow.
            </p>
            <a
              href="#contact"
              className="group relative inline-block px-6 py-3 font-bold uppercase rounded-full w-fit overflow-hidden text-[#E8E3E3] bg-[#393632]"
            >
              <span className="absolute inset-0 bg-[#716A63] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
              <span className="relative z-10">Contact ↗</span>
            </a>
          </div>

          {/* Right: Remaining Full About Content */}
          <div className="flex-1 max-w-5xl text-lg leading-relaxed text-gray-800 pb-[2em]">
            <h3 className="text-2xl font-extrabold">
              ex - Software Developer @ ABB || Generation Google Scholar '24 ||
              Final Year Software Development Student @ DkIT
            </h3>
            <br />
            <p>
              My journey into software development began in 2020 when I taught
              myself Python through online courses. This sparked my passion for
              technology, led me to explore HTML, CSS, JavaScript, and other
              tools. Now, as I enter my final year of study, I'm eager to refine
              my skills and take the next step toward becoming a well-rounded
              software developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
