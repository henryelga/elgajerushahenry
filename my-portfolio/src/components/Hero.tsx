export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center"
    >
      <h1 className="text-5xl font-bold mb-4">Hello, I'm Elga Jerusha Henry</h1>
      <p className="text-xl mb-8">
        ex - Software Developer @ ABB || Generation Google Scholar '24 || Final
        Year Software Development Student @ DkIT
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
};
