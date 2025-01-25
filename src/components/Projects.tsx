const projects = [
    {
      title: "Realtime Chat-App",
      description:
        "A real-time chat application built using the MERN stack with features like user authentication, group chats, and instant messaging.",
      githubLink: "https://github.com/aadi1094/Realtime_Chat-App.git",
      techStack: ["MERN Stack"],
    },
    {
      title: "Nerworkify",
      description:
        "A social networking application created with the MERN stack, enabling users to connect, share posts, and interact seamlessly.",
      githubLink: "https://github.com/aadi1094/Nerworkify.git",
      techStack: ["MERN Stack"],
    },
    {
      title: "Attendance Management System using Face Recognition",
      description:
        "A Python-based application leveraging face recognition to manage attendance efficiently and securely.",
      githubLink:
        "https://github.com/aadi1094/Attendance-Management-System-using-Face-Recognition.git",
      techStack: ["Python", "Face Recognition"],
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-16 bg-[#0A101E] text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            My Projects
          </h2>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#123848] rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#F4A261]">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base mb-4">{project.description}</p>
                <p className="text-sm mb-4">
                  <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                </p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F4A261] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#e69556] transition duration-300"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  