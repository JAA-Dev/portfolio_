import { Github, MonitorUp } from "lucide-react";

const ProjectCard = ({ project }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500 animate-pulse";
      case "In Progress":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  const isActive = project.status === "Active";

  return (
    <div
      className="
      cards group hover:shadow-lg hover:-translate-y-1 
      transition-all duration-300 w-full relative
      dark:bg-[#1e1e1e] dark:border-white/10
    "
    >
      {/* IMAGE WRAPPER */}
      <div
        className="
        w-full rounded-xl overflow-hidden 
        bg-white border border-gray-200 relative
        dark:bg-[#262626] dark:border-white/10
      "
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
        />

        {/* Hover icons (Desktop) */}
        <div
          className="
          absolute top-3 right-3 md:flex gap-2 opacity-0 
          group-hover:opacity-100 transition-all duration-300 hidden
        "
        >
          <a
            href={project.github}
            target="_blank"
            className="
              p-2 bg-white dark:bg-[#1e1e1e] 
              rounded-full shadow hover:scale-110 transition
              dark:shadow-white/5
            "
          >
            <Github size={18} className="dark:text-white" />
          </a>

          {isActive && project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="
                p-2 bg-white dark:bg-[#1e1e1e] 
                rounded-full shadow hover:scale-110 transition
                dark:shadow-white/5
              "
            >
              <MonitorUp size={18} className="dark:text-white" />
            </a>
          )}
        </div>

        {/* Status dot */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span
            className={`h-3 w-3 rounded-full ${getStatusColor(project.status)}`}
          ></span>
          <span
            className="
            text-xs bg-white/80 dark:bg-white/10 
            px-2 py-1 rounded-md shadow dark:text-white
          "
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-2 py-4">
        {/* Title row */}
        <div className="flex items-center justify-between">
          <h3
            className="
            text-base font-semibold mt-2 mb-2 
            group-hover:text-gray-700 dark:text-white
            dark:group-hover:text-gray-300 transition-colors
          "
          >
            {project.title}
          </h3>

          {/* Mobile buttons */}
          <div className="flex md:hidden gap-2">
            <a
              href={project.github}
              target="_blank"
              className="p-2 bg-gray-100 dark:bg-white/10 rounded-full shadow-sm"
            >
              <Github size={16} className="dark:text-white" />
            </a>

            {isActive && project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className="p-2 bg-gray-100 dark:bg-white/10 rounded-full shadow-sm"
              >
                <MonitorUp size={16} className="dark:text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="
                text-xs bg-[#233831]/10 dark:bg-white/10 
                px-2 py-1 rounded-md dark:text-white
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
