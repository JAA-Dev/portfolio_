import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="p-6 mt-14" id="footer">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center flex-wrap">
            <h1 className="text-lg font-semibold">
              <a href="#home">
                <span className="font-color">JAA</span>Dev
              </a>
            </h1>
            <nav className="flex space-x-6 text-sm">
              <a href="#home" className="footer-a">
                Home
              </a>
              <a href="#about" className="footer-a">
                About
              </a>
              <a href="#skills" className="footer-a">
                Skills
              </a>
              <a href="#project" className="footer-a">
                Project
              </a>
              <a href="#footer" className="footer-a">
                Contact
              </a>
            </nav>
          </div>

          <hr className="my-4" />

          <div className="flex max-sm:flex-col justify-between items-center flex-wrap">
            <p className="text-sm max-sm:mb-2.5">Copyright © 2025</p>
            <div className="flex space-x-4 text-2xl max-sm:mb-2.5">
              <a href="https://github.com/JAA-Dev" target="_blank">
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/augustine-angeles-729780383/"
                target="_blank"
              >
                <Linkedin className="text-blue-500" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=augustineangeles2@gmail.com"
                target="_blank"
              >
                <Mail className="text-red-600" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
