import BsuLogo from "../assets/logo/bsu-logo.png";
import CambaogLogo from "../assets/logo/cambaog1.jpg";
import { userIntersectionObserver } from "../hooks/userIntersectionObserver";
import { useScrollToTop } from "../hooks/useScrollToTop";


const Education = () => {
  const hasAnimated = userIntersectionObserver();
  const showScrollTop = useScrollToTop();

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            hasAnimated.education
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="education"
        >
          {/* School */}
          <div className="max-w-3xl mx-auto px-4 py-15">
            <h2 className="text-4xl font-bold mb-12 text-center">Education.</h2>

            <div className="flex flex-col gap-10">
              <div
                className="card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 
                    flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5 p-5"
              >
                <div className="w-full sm:w-auto text-center sm:text-left">
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
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                />
              </div>

              <div
                className="card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 
                    flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5 p-5"
              >
                <div className="w-full sm:w-auto text-center sm:text-left">
                  <h3 className="text-xl font-bold">
                    Technical-Vocational-Livelihood, Home Economics (HE).
                  </h3>
                  <p className="p-second">Cambaog National High School.</p>
                  <p className="p-second">2018 - 2020</p>
                </div>
                <img
                  src={CambaogLogo}
                  alt="School Logo"
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
