import { userIntersectionObserver } from "../hooks/userIntersectionObserver";
import { useScrollToTop } from "../hooks/useScrollToTop";
import MyPhoto from ".././assets/FRAME2.JPG";
import BsuLogo from "../assets/logo/bsu-logo.png";
import CambaogLogo from "../assets/logo/cambaog1.jpg";
import { techLogos } from "../data/skills";

const About = () => {
  const hasAnimated = userIntersectionObserver();
  const showScrollTop = useScrollToTop();
  const { TechLogos } = techLogos;

  return (
    <section className="py-16 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            hasAnimated.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">About Me.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="card rounded-xl overflow-hidden backdrop-blur-md p-8 border-white/10
                        border hover:-translate-y-5 hover:rotate-3 hover:scale-105 transition-all duration-100"
            >
              <img
                src={MyPhoto}
                alt="Profile"
                className="w-100 h-100 md:w-800 md:h-150"
              />
            </div>

            <div>
              <p className="text-xl text-gray-700 mb-6">
                I am a fresh graduate with a strong passion for web development,
                currently focused on mastering frontend technologies. I enjoy
                building clean, responsive, and user-friendly interfaces that
                create great user experiences.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                While I am open to learning backend development as well, my main
                goal for now is to deepen my skills in HTML, CSS, JavaScript,
                and modern frontend frameworks. I'm eager to learn, grow, and
                contribute to real-world projects.
              </p>
            </div>
          </div>

          {/* School */}
          <div className="max-w-3xl mx-auto px-4 py-15" id="schools">
            <h2 className="text-4xl font-bold mb-12 text-center">Education.</h2>
            <div className="flex flex-col items-center justify-between gap-10">
              <div className="card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* hover:translate-y-1 transition-all text-[#383838] */}
                <div className="w-sm max-sm:text-center md:w-2xl">
                  <h3 className="text-xl font-bold">
                    Bachelor of Science in Information Technology.
                  </h3>
                  <p className="p-second">
                    Bulacan State University - Bustos Campus.
                  </p>
                  <p className="p-second">August 2020 - July 2025</p>
                </div>
                <img
                  src={BsuLogo}
                  alt="School Logo"
                  className="w-30 h-30 max-sm:mb-5"
                />
              </div>
              <div className="card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-sm max-sm:text-center md:w-2xl ">
                  <h3 className="text-xl font-bold">
                    Technical-Vocational-Livelihood, Home Economics (HE).
                  </h3>
                  <p className="p-second">Cambaog Nation High School.</p>
                  <p className="p-second">2018 - 2020</p>
                </div>
                <img
                  src={CambaogLogo}
                  alt="School Logo"
                  className="w-30 h-30 max-sm:mb-5 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="max-w-3xl mx-auto mt-8 px-4 py-15" id="skills">
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

export default About;
