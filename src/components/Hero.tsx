import {motion} from "motion/react"

const Hero = () => {
  return (
    <section
      className="h-[90vh] bg-[#0A101E] flex items-center justify-center text-white"
      id="hero"
    >
      <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="container mx-auto px-6 sm:px-12 lg:px-20 flex flex-col-reverse sm:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="text-center sm:text-left sm:w-1/2 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-[#F4A261]">Aditya Chawale</span>
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Aspiring {" "}
            <span className="text-[#A9C5CC]">Full-Stack Developer</span>
          </p>

          {/* Call-to-Actions */}
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start py-2">
            <a
              href="#projects"
              className="bg-[#F4A261] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e69556] transition duration-300"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-transparent border-2 border-[#F4A261] text-[#F4A261] px-6 py-3 rounded-lg font-medium hover:bg-[#e69556] hover:text-white transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="sm:w-1/2 flex justify-center sm:justify-center px-6 mb-8 sm:mb-0">
          <img
            src="/Aditya.jpg"
            alt="Aditya Chawale"
            className="w-48 h-48 sm:w-72 sm:h-72 rounded-full shadow-lg border-4 border-[#A9C5CC]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

