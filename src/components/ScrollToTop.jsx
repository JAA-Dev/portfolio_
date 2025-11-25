import { ArrowUp, Rocket } from "lucide-react"

const ScrollToTop = ({ showScrollTop }) => {
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTopHandler}
      className="fixed bottom-8 right-8 bg-[#262626] text-white p-3 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg cursor-pointer z-50"
    >
      <Rocket className="w-5 h-5 -rotate-45" />
    </button>
  );
};

export default ScrollToTop;
