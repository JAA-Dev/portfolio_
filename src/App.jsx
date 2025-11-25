// import About from "./components/About";
// import Hero from "./components/Hero";
// import Navigation from "./components/Navigation";
// import Project from "./components/Project";
// import { userIntersectionObserver } from "./hooks/userIntersectionObserver";
// import Contact from "./components/Contact";
// import Skills from "./components/Skills";
// import Footer from "./components/Footer";
// // import LoadingScreen from "./UI/LoadingScreen";
// // import { useState } from "react";

// function App() {
//   const hasAnimated = userIntersectionObserver();
//   // const [isLoaded, setIsLoaded] = useState(false);

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
//       <Navigation />
//       <Hero hasAnimated={hasAnimated} />
//       <About hasAnimated={hasAnimated} />
//       <Skills hasAnimated={hasAnimated} />
//       <Project hasAnimated={hasAnimated} />
//       <Contact hasAnimated={hasAnimated} />
//       <Footer />
//     </div>
//   );
// }

// export default App;


//end

// import { useState } from "react";
// import About from "./components/About";
// import Hero from "./components/Hero";
// import Navigation from "./components/Navigation";
// import Project from "./components/Project";
// import Contact from "./components/Contact";
// import Skills from "./components/Skills";
// import Footer from "./components/Footer";
// import { userIntersectionObserver } from "./hooks/userIntersectionObserver";
// import { useScrollToTop } from "./hooks/useScrollToTop";
// import { LoadingScreen } from "./UI/LoadingScreen";
// import Education from "./components/Education";

// function App() {
//   const hasAnimated = userIntersectionObserver();
//   const showScrollTop = useScrollToTop();
//   const [isLoaded, setIsLoaded] = useState(false);

//   return (
//     <>
//       {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

//       <div
//         className={`min-h-screen bg-white dark:bg-black
//         text-black dark:text-white transition-opacity duration-700
//         ${isLoaded ? "opacity-100" : "opacity-0"}`}
//       >
//         <Navigation />
//         <Hero hasAnimated={hasAnimated} isLoaded={isLoaded} />
//         <About hasAnimated={hasAnimated} isLoaded={isLoaded} />
//         <Education hasAnimated={hasAnimated} isLoaded={isLoaded}/>
//         <Skills hasAnimated={hasAnimated} isLoaded={isLoaded}/>
//         <Project hasAnimated={hasAnimated} isLoaded={isLoaded} />
//         <Contact hasAnimated={hasAnimated} isLoaded={isLoaded}/>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;


//////////////////////////////////////////////////////////////////////////////////////////////


// import { useState } from "react";
// import About from "./components/About";
// import Hero from "./components/Hero";
// import Navigation from "./components/Navigation";
// import Project from "./components/Project";
// import Contact from "./components/Contact";
// import Skills from "./components/Skills";
// import Footer from "./components/Footer";
// import Education from "./components/Education";

// import { userIntersectionObserver } from "./hooks/userIntersectionObserver";
// import { useScrollToTop } from "./hooks/useScrollToTop";

// import { LoadingScreen } from "./UI/LoadingScreen";
// import { LoadingDark } from "./UI/LoadingDark";
// import ScrollToTop from "./components/ScrollToTop";

// function App() {
//   const hasAnimated = userIntersectionObserver();
//   const showScrollTop = useScrollToTop();

//   const [isLoaded, setIsLoaded] = useState(false);
//   const [themeLoading, setThemeLoading] = useState(false);

//   return (
//     <>
//       {/* Initial App Loading */}
//       {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

//       {/* Dark/Light Mode Loading */}
//       {themeLoading && (
//         <LoadingDark onComplete={() => setThemeLoading(false)} />
//       )}

//       <div
//         className={`min-h-screen bg-white dark:bg-black text-black dark:text-white 
//           transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
//       >
//         <Navigation onThemeSwitch={() => setThemeLoading(true)} />

//         <Hero hasAnimated={hasAnimated} isLoaded={isLoaded} />
//         <About hasAnimated={hasAnimated} isLoaded={isLoaded} />
//         <Education hasAnimated={hasAnimated} isLoaded={isLoaded} />
//         <Skills hasAnimated={hasAnimated} isLoaded={isLoaded} />
//         <Project hasAnimated={hasAnimated} isLoaded={isLoaded} />
//         <Contact hasAnimated={hasAnimated} isLoaded={isLoaded} />
//         <Footer />
//         <ScrollToTop showScrollTop={showScrollTop}/>
//       </div>
//     </>
//   );
// }

// export default App;



//////////////////////////////

import { useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";

import { userIntersectionObserver } from "./hooks/userIntersectionObserver";
import { useScrollToTop } from "./hooks/useScrollToTop";

import { LoadingScreen } from "./UI/LoadingScreen";
import { LoadingDark } from "./UI/LoadingDark";
import { LoadingLight } from "./UI/LoadingLight";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const hasAnimated = userIntersectionObserver();
  const showScrollTop = useScrollToTop();

  const [isLoaded, setIsLoaded] = useState(false);

  // themeLoading = "dark" | "light" | false
  const [themeLoading, setThemeLoading] = useState(false);

  return (
    <>
      {/* Initial App Loading */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* Theme Loading Screens */}
      {themeLoading === "dark" && (
        <LoadingDark onComplete={() => setThemeLoading(false)} />
      )}

      {themeLoading === "light" && (
        <LoadingLight onComplete={() => setThemeLoading(false)} />
      )}

      <div
        className={`min-h-screen bg-white dark:bg-black text-black dark:text-white 
        transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation
          onThemeSwitch={(mode) => {
            setThemeLoading(mode); // "dark" or "light"
          }}
        />

        <Hero hasAnimated={hasAnimated} isLoaded={isLoaded} />
        <About hasAnimated={hasAnimated} isLoaded={isLoaded} />
        <Education hasAnimated={hasAnimated} isLoaded={isLoaded} />
        <Skills hasAnimated={hasAnimated} isLoaded={isLoaded} />
        <Project hasAnimated={hasAnimated} isLoaded={isLoaded} />
        <Contact hasAnimated={hasAnimated} isLoaded={isLoaded} />
        <Footer />
        <ScrollToTop showScrollTop={showScrollTop} />
      </div>
    </>
  );
}

export default App;
