import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { projects } from '../../constants';
import { cn } from '../../lib/utils';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'React JS', 'Node.js', 'Python', 'HTML'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
                activeFilter === filter
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                  : 'glass-effect text-gray-400 hover:text-white hover:bg-white/10'
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.02}
                  transitionSpeed={2000}
                  className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/90 via-bg-darker/20 to-transparent"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded-md">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
              onClick={() => setSelectedProject(null)}
            ></div>
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] glass-card rounded-3xl overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-primary/80 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md border border-white/10"
              >
                <FaTimes />
              </button>
              
              <div className="overflow-y-auto custom-scrollbar">
                <div className="relative h-64 sm:h-80 w-full">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-darker to-transparent"></div>
                </div>
                
                <div className="p-6 sm:p-10 relative -mt-20">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-md">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="text-sm font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3 text-white">Overview</h4>
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    {selectedProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 mt-auto">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 glass-effect text-white rounded-xl hover:bg-white/10 transition-colors"
                      >
                        <FaGithub size={20} />
                        View Code
                      </a>
                    )}
                    {selectedProject.webapp && (
                      <a
                        href={selectedProject.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
                      >
                        <FaExternalLinkAlt size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
