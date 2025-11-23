
import About from "./components/About";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import { userIntersectionObserver } from "./hooks/userIntersectionObserver";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Contact from "./components/Contact";
// import LoadingScreen from "./UI/LoadingScreen";
// import { useState } from "react";

function App() {
  const hasAnimated = userIntersectionObserver();
  const showScrollTop = useScrollToTop();
  // const [isLoaded, setIsLoaded] = useState(false);
  // <>
  {
    /* {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen bg-white-500 text-black transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      > */
  }
  // </>

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navigation />
      <Hero hasAnimated={hasAnimated} />
      <About hasAnimated={hasAnimated} />
      <Project hasAnimated={hasAnimated} />
      <Contact hasAnimated={hasAnimated} />
    </div>
  );
}

export default App;


// import { useState } from "react";
// import About from "./components/About";
// import Hero from "./components/Hero";
// import Navigation from "./components/Navigation";
// import Project from "./components/Project";
// import { userIntersectionObserver } from "./hooks/userIntersectionObserver";
// import { useScrollToTop } from "./hooks/useScrollToTop";
// import { LoadingScreen } from "./UI/LoadingScreen";

// function App() {
//   const hasAnimated = userIntersectionObserver();
//   const showScrollTop = useScrollToTop();
//   const [isLoaded, setIsLoaded] = useState(false);

//   return (
//     <>
//       {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

//       <div
//         className={`min-h-screen bg-white dark:bg-gray-900 
//         text-black dark:text-white transition-opacity duration-700
//         ${isLoaded ? "opacity-100" : "opacity-0"}`}
//       >
//         <Navigation />
//         <Hero hasAnimated={hasAnimated} isLoaded={isLoaded} />
//         <About hasAnimated={hasAnimated} isLoaded={isLoaded} />
//         <Project hasAnimated={hasAnimated} isLoaded={isLoaded}/>
//       </div>
//     </>
//   );
// }

// export default App;
