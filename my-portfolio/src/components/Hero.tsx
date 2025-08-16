export const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Elga J Henry</h1>
      <p className="text-xl mb-8">Software Developer & Problem Solver</p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
};
