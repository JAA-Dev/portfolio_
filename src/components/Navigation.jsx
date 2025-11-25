import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Navigation = ({ onThemeSwitch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleMobileMenu = () =>
    setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // MAIN FIX
  const toggleDarkMode = () => {
    const newMode = !isDarkMode; // true = dark, false = light

    // Tell App the next mode so it knows which loader to show
    onThemeSwitch(newMode ? "dark" : "light");

    // Delay so loading animation appears first
    setTimeout(() => {
      setIsDarkMode(newMode);

      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, 350);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 60;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    closeMobileMenu();
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#project", label: "Project" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#262626] shadow"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <div
            className="text-xl font-bold cursor-pointer text-black dark:text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            JAADev
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItem.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              >
                {item.label}
              </a>
            ))}

            {/* DARK MODE BUTTON */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg space-y-4">

            {navItem.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}

            {/* DARK MODE MOBILE BUTTON */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {isDarkMode ? (
                <>
                  <Sun className="text-yellow-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="text-gray-400" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;



