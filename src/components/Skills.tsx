import ReactIcon from "../components/icons/React";
import TS from "../components/icons/TS";
import Tailwind from "../components/icons/Tailwind";
import Node from "../components/icons/Node";
import Express from "../components/icons/Express";
import Postgres from "../components/icons/Postgres";
import Mongo from "../components/icons/Mongo";
import Git from "../components/icons/Git";
import Python from "./icons/Python";

const skills = [
  {
    category: "Frontend",
    items: [<ReactIcon />, <TS />, <Tailwind /> , <Python />],
  },
  {
    category: "Backend",
    items: [<Node />, <Express />, <Postgres />, <Mongo />],
  },
  { category: "Tools", items: [<Git />] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-[#0A101E] text-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-6 bg-[#123848] rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#F4A261]">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillGroup.items.map((skill, index) => (
                  <div
                    key={index}
                    className="min-w-12 h-12 p-2 rounded-lg bg-[#0E3343] border border-[#A9C5CC] hover:bg-[#1A4E5E] transition duration-300 "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
