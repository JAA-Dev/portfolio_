import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({project}) => {
  //{project}
  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="h-48 bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-2">
        <div className="text-6xl font-bold text-gray-300">
          {/* {project.title.charAt(0)} */}
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-6 flex flex-col grow mt-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm loading-relaxed grow">
          {/* Descripton */}
          {project.description}
          </p>
      </div>
    </div>
  );
};

export default ProjectCard;


// <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
//       <div className="h-48 bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-2">
//         <div className="text-6xl font-bold text-gray-300">
//           {/* {project.title.charAt(0)} */}
//           <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
//         </div>
//       </div>
//       <div className="p-6 flex flex-col grow mt-6">
//         <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors">
//           {project.title}
//         </h3>
//         <p className="text-gray-600 mb-4 text-sm loading-relaxed grow">
//           {/* Descripton */}
//           {project.description}
//           </p>
//         <div className="flex flex-wrap gap-2 mb-4">
//             {/* <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">HTML</span> */}
//             {project.tech.map((item, i) => (
//             <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
//               {item}
//             </span>
//           ))}

//         </div>
//         <div className="flex space-x-4 mt-auto">
//             <a href={project.github} target="_blank" className="flex items-center text-gray-600 hover:text-black transition-all text-sm"><Github className="w-4 h-4 mr-1" />Code</a>
//             <a href={project.demo} target="_blank" className="flex items-center text-gray-600 hover:text-black transition-all text-sm"><ExternalLink className="w-4 h-4 mr-1" />Demo</a>
//         </div>
//       </div>
//     </div>