

const AboutMe = () => {
  return (
    <section className="bg-[#0E3343] text-white py-16" id="about">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          About Me
        </h2>

        <div className="text-center sm:text-left sm:w-2/3 mx-auto">
  <p className="text-lg sm:text-xl mb-6">
    Hi, I'm <span className="text-[#F4A261]">Aditya Chawale</span>, a passionate{" "}
    <span className="text-[#F4A261]">Full-Stack Developer</span> with expertise in the{" "}
    <span className="text-[#F4A261]">MERN stack</span> and a strong foundation in{" "}
    <span className="text-[#F4A261]">Python</span> development.
  </p>

  <p className="text-lg sm:text-xl mb-6">
    I specialize in creating scalable, dynamic web applications using{" "}
    <span className="text-[#A9C5CC]">MongoDB, Express, React, and Node.js</span>, and I also enjoy building applications in{" "}
    <span className="text-[#A9C5CC]">Python</span> with a focus on{" "}
    <span className="text-[#A9C5CC]">Tkinter</span> for GUI-based projects.
  </p>

  <p className="text-lg sm:text-xl">
    Currently, I’m focusing on enhancing my MERN stack skills and applying Python for automation and data-driven applications.
  </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
