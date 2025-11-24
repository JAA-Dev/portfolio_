import { techLogos } from "../data/skills";
import { userIntersectionObserver } from "../hooks/userIntersectionObserver";

const Skills = () => {
  const hasAnimated = userIntersectionObserver();
  const { TechLogos } = techLogos;
  return (
    <section className="py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            hasAnimated.skills
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="skills"
        >
          <div className="max-w-3xl mx-auto px-4 py-15">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills.</h2>
            <h2 className="text-sm md:text-lg  mb-9">Techologies and Tools</h2>
            <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-4">
              {techLogos.map((tech, index) => (
                <div
                  key={index}
                  className="card relative group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <img src={tech.src} alt={tech.label} className="logos" />
                  <div className="logos-text">
                    <span className="logos-span">{tech.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
