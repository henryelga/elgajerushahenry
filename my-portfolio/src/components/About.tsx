export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col text-gray-900 px-12 py-5"
      style={{ backgroundColor: "#E8E8E3", color: "#171717" }}
    >
      {/* Top Row: Headline */}
      <div className="w-full flex justify-between items-center mb-12">
        <div className="text-lg font-semibold text-gray-700">
          ex - Software Developer @ ABB || Generation Google Scholar '24 ||
          Final Year Software Development Student @ DkIT
        </div>
      </div>

      {/* Full-Width Name */}
      <h1 className="font-inconsolata font-bold scale-y-110 py-16 text-[8rem] md:text-[12.5rem] uppercase leading-[1] text-center">
        ELGA JERUSHA HENRY
      </h1>

      <div className="text-2xl font-semibold" color="#716A63">
        {/* Bottom Section */}
        <div
          className="flex justify-between flex-1 items-end py-10"
          style={{ color: "#393632" }}
        >
          {/* Left: Short Summary + Contact Button */}
          <div className="flex flex-col space-y-8 max-w-lg">
            <div>
              <p className="text-gray-700 px-2 leading-relaxed">
                Final-year Software Development student. Passionate and curious.
                I love solving problems and always push myself to learn and
                grow.
              </p>
            </div>
            <a
              href="#contact"
              className="group relative inline-block px-6 py-3 font-bold uppercase rounded-full w-fit overflow-hidden text-[#E8E3E3] bg-[#393632]"
            >
              {/* Sliding hover background */}
              <span className="absolute inset-0 bg-[#716A63] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>

              {/* Button text */}
              <span className="relative z-10">Contact ↗</span>
            </a>
          </div>

          {/* Right: Remaining Full About Content */}
          <div className="max-w-5xl text-lg leading-relaxed text-gray-800">
            <p>
              My journey into software development began in 2020 when I taught
              myself Python through online courses. This sparked my passion for
              technology, led me to explore HTML, CSS, JavaScript, and other
              tools. Now, as I enter my final year of study, I'm eager to refine
              my skills and take the next step toward becoming a well-rounded
              software developer.
            </p>
            <br />
            <p>
              One way I keep my problem-solving skills sharp is by exploring
              different types of Rubik's Cubes. I'm self-taught and enjoy
              solving a variety of cubes like the 2x2, 3x3, 4x4, 5x5, 6x6,
              Mirror Cube, Skewb, Barrel Cube, Pyraminx, Gear Cube, and
              Megaminx.
            </p>
            <br />
            <p>
              Outside of coding and cubing, I enjoy playing music (piano,
              harmonica, ukulele), reading mystery, adventure, detective
              stories, as well as biographies and autobiographies, and staying
              active through badminton.
            </p>
            <br />
            <p>
              Adaptable, collaborative, and always curious—I'm ready to take on
              new challenges and keep learning every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
