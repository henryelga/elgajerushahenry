export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col bg-white text-gray-900 px-12 py-5"
    >
      {/* Top Row: Headline */}
      <div className="w-full flex justify-between items-center mb-12">
        <div className="text-lg font-semibold text-gray-700">
          ex - Software Developer @ ABB || Generation Google Scholar '24 ||
          Final Year Software Development Student @ DkIT
        </div>
      </div>

      {/* Full-Width Name */}
      <h1 className="font-inconsolata font-bold scale-y-110 py-12 text-[8rem] md:text-[12.5rem] uppercase leading-[1] text-center">
        ELGA JERUSHA HENRY
      </h1>

      {/* Bottom Section */}
      <div className="flex justify-between flex-1 items-end py-10">
        {/* Left: Short Summary + Contact Button */}
        <div className="flex flex-col space-y-4 max-w-md">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              Passionate and curious final-year Software Development student at
              Dundalk Institute of Technology, Ireland. I thrive in dynamic
              environments, love solving problems, and constantly push myself to
              learn and grow as a developer.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-fit"
          >
            Contact
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
            different types of Rubik's Cubes. I'm self-taught and enjoy solving
            a variety of cubes like the 2x2, 3x3, 4x4, 5x5, 6x6, Mirror Cube,
            Skewb, Barrel Cube, Pyraminx, Gear Cube, and Megaminx.
          </p>
          <br />
          <p>
            Outside of coding and cubing, I enjoy playing music (piano,
            harmonica, ukulele), reading mystery, adventure, detective stories,
            as well as biographies and autobiographies, and staying active
            through badminton.
          </p>
          <br />
          <p>
            Adaptable, collaborative, and always curious—I'm ready to take on
            new challenges and keep learning every day.
          </p>
        </div>
      </div>
    </section>
  );
};
