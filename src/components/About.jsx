import { userIntersectionObserver } from "../hooks/userIntersectionObserver";
import { useScrollToTop } from "../hooks/useScrollToTop";
import MyPhoto from ".././assets/FRAME2.JPG";

const About = () => {
  const hasAnimated = userIntersectionObserver();
  const showScrollTop = useScrollToTop();

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            hasAnimated.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="about"
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
                className="w-100 h-100 rounded-2xl md:w-800 md:h-150"
              />
            </div>

            <div>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                I am a fresh graduate with a strong passion for web development,
                currently focused on mastering frontend technologies. I enjoy
                building clean, responsive, and user-friendly interfaces that
                create great user experiences.
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                While I am open to learning backend development as well, my main
                goal for now is to deepen my skills in HTML, CSS, JavaScript,
                and modern frontend frameworks. I'm eager to learn, grow, and
                contribute to real-world projects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
