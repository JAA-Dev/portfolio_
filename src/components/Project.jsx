import { userIntersectionObserver } from "../hooks/userIntersectionObserver";
import { useScrollToTop } from "../hooks/useScrollToTop";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/project";

const Project = () => {
    const hasAnimated = userIntersectionObserver();
    const showScrollTop = useScrollToTop();
    
  return (
    <section className='py-16 px-6' id='project'>
        <div className='max-w-6xl mx-auto '>
            <div className={`transition-all duration-1000 delay-300 ${hasAnimated.project ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className='text-4xl font-bold mb-12 text-center'>Project.</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project