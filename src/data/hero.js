import Resume from "../assets/AugustineM.Angeles-CV.pdf";

export const heroData = {
  greeting: "✋ Hello, I'm",
  name: "Augustine",
  roles: ["Frontend Developer", "UI/UX Developer", "Laravel Developer"],
  description:
    "I'm a passionate front-end developer dedicated to creating seamless, intuitive, and visually engaging web experiences.",
  socialLinks: [
    {
      name: "Github",
      url: "https://github.com/JAA-Dev",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/augustine-angeles-729780383/",
      icon: "Linkedin",
    },
    {
      name: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=augustineangeles2@gmail.com",
      icon: "Mail",
    },
  ],
  ctaButtons: [
    {
      text: "Download CV",
      href: Resume,
      variant: "primary",
    },
    {
      text: "Let's Connect",
      href: "#contact",
      variant: "secondary",
    },
  ],
};
