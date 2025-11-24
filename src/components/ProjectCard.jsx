import { Github, MonitorUp } from "lucide-react";

const ProjectCard = ({ project }) => {
  // Status Color Logic
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500 animate-pulse";
      case "In Progress":
        return "bg-red-500";
      default:
        return "bg-gray-400"; // Not Active
    }
  };

  const isActive = project.status === "Active";

  return (
    <div className="cards group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full relative">

      <div className="w-full rounded-xl overflow-hidden bg-white border border-gray-200 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
        />

        <div className="absolute top-3 right-3 md:flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden">
          {/* Github always visible */}
          <a
            href={project.github}
            target="_blank"
            className="p-2 bg-white rounded-full shadow hover:scale-110 transition"
          >
            <Github size={18} />
          </a>
          {/* Demo only when Active */}
          {isActive && project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="p-2 bg-white rounded-full shadow hover:scale-110 transition"
            >
              <MonitorUp size={18} />
            </a>
          )}
        </div>
        {/* Status Dot */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span
            className={`h-3 w-3 rounded-full ${getStatusColor(project.status)}`}
          ></span>
          <span className="text-xs bg-white/80 px-2 py-1 rounded-md shadow">
            {project.status}
          </span>
        </div>
      </div>

      {/* Title + Description */}
      <div className="px-2 py-4">
        {/* Title + Mobile Icons */}
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold mt-2 mb-2 group-hover:text-gray-700 transition-colors">
            {project.title}
          </h3>
          {/* Mobile icon buttons */}
          <div className="flex md:hidden gap-2">
            {/* Github always visible */}
            <a
              href={project.github}
              target="_blank"
              className="p-2 bg-gray-100 rounded-full shadow-sm"
            >
              <Github size={16} />
            </a>
            {/* Demo only when Active */}
            {isActive && project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className="p-2 bg-gray-100 rounded-full shadow-sm"
              >
                <MonitorUp size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-[#233831]/10 dark:bg-white/10 px-2 py-1 rounded-md"
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
