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
import SnowFall from "react-snowfall";
function App() {
  const hasAnimated = userIntersectionObserver();
  const showScrollTop = useScrollToTop();

  const [isLoaded, setIsLoaded] = useState(false);

  // themeLoading = "dark" | "light" | false
  const [themeLoading, setThemeLoading] = useState(false);

  // Check if current month is December
  const isDecember = new Date().getMonth() === 11;

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

      {/* Show Snowfall only in December */}
      {isDecember && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <SnowFall
            color="#82C3D9"
            snowflakeCount={150}
          />
        </div>
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
// import { useEffect, useState } from "react";

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
// import { LoadingLight } from "./UI/LoadingLight";
// import ScrollToTop from "./components/ScrollToTop";

// export default function App() {
//   const hasAnimated = userIntersectionObserver();
//   const showScrollTop = useScrollToTop();

//   const [isLoaded, setIsLoaded] = useState(false);

//   // Load ONLY "dark" or "light"
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "light"
//   );

//   // Theme loading animation
//   const [themeLoading, setThemeLoading] = useState(false);

//   // Apply theme to HTML
//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   // Navigation triggers this
//   const handleThemeSwitch = (newMode) => {
//     console.log("App set theme to:", newMode);

//     localStorage.setItem("theme", newMode);
//     setTheme(newMode);

//     setThemeLoading(newMode === "dark" ? "dark" : "light");
//   };

//   return (
//     <>
//       {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

//       {themeLoading === "dark" && (
//         <LoadingDark onComplete={() => setThemeLoading(false)} />
//       )}

//       {themeLoading === "light" && (
//         <LoadingLight onComplete={() => setThemeLoading(false)} />
//       )}

//       <div
//   className={`min-h-screen transition-opacity duration-700 ${
//     isLoaded ? "opacity-100" : "opacity-0"
//   }`}
// >
//   <Navigation onThemeSwitch={handleThemeSwitch} />

//   <Hero hasAnimated={hasAnimated} isLoaded={isLoaded} />
//   <About hasAnimated={hasAnimated} isLoaded={isLoaded} />
//   <Education hasAnimated={hasAnimated} isLoaded={isLoaded} />
//   <Skills hasAnimated={hasAnimated} isLoaded={isLoaded} />
//   <Project hasAnimated={hasAnimated} isLoaded={isLoaded} />
//   <Contact hasAnimated={hasAnimated} isLoaded={isLoaded} />

//   <Footer />
//   <ScrollToTop showScrollTop={showScrollTop} />
// </div>

//     </>
//   );
// }
