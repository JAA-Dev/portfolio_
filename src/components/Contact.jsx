import { userIntersectionObserver } from "../hooks/userIntersectionObserver";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { Facebook, Github, Linkedin, Phone, Mail } from "lucide-react";
const Contact = () => {
  const hasAnimated = userIntersectionObserver();
  const showScrollTop = useScrollToTop();

  return (
    <section className="pt-16 px-6 " id="contact">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            hasAnimated.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
            <h2 className='text-4xl font-bold mb-12 text-center'>Contact.</h2>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-6 mt-10" id='footer'>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="text-lg font-semibold"><span className='font-color'>JAA</span>Dev</h1>
          <nav className="flex space-x-6 text-sm">
            <a href="#home" className="footer-a">Home</a>
            <a href="#about" className="footer-a">About</a>
            <a href="#project" className="footer-a">Project</a>
            <a href="#footer" className="footer-a">Contact</a>
          </nav>
        </div>

        <hr className="my-4" />

        <div className="flex max-sm:flex-col justify-between items-center flex-wrap">
          <p className="text-sm max-sm:mb-2.5">Copyright © 2025</p>
          <div className="flex space-x-4 text-2xl max-sm:mb-2.5">
            <a href="#" target='_blank'><Github/></a>
            <a href="https://web.facebook.com/joshua.augustineangeles/" target='_blank'><Facebook className="text-blue-600" /></a>
            <a href="#" target='_blank'><Linkedin className="text-blue-500" /></a>
            <a href="#" onClick={(e) => navigator.clipboard.writeText("augustineangeles2@gmail.com") && e.preventDefault()}><Mail className="text-red-500" /></a>
            <a href="#" onClick={(e) => navigator.clipboard.writeText("09319380308") && e.preventDefault()}><Phone className="text-blue-400" /></a>
          </div>
        </div>
      </div>
    </footer>
    </section>
    
  );
};

export default Contact;
