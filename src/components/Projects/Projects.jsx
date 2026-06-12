import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../constants';

const Card = ({ project, index, progress, targetScale }) => {
  // We use scroll progress to scale down the cards when they are overlapped
  const scale = useTransform(progress, [index / projects.length, 1], [1, targetScale]);

  return (
    <div 
      className="sticky w-full flex justify-center" 
      style={{ 
        top: `calc(15vh + ${index * 30}px)`, 
        marginBottom: index === projects.length - 1 ? '0' : '15vh'
      }}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full max-w-5xl h-[500px] md:h-[450px] bg-white border border-gray-200 rounded-[32px] overflow-hidden shadow-2xl transform origin-top flex flex-col md:flex-row"
      >
        {/* Content Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 bg-white relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-xs font-bold text-[var(--color-primary)] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {project.title}
          </h3>
          
          <p className="text-gray-500 text-base md:text-lg mb-8 line-clamp-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-auto">
            {project.webapp && project.webapp !== '#' && (
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl hover:bg-blue-600 transition-colors font-medium shadow-sm flex-1 sm:flex-none"
              >
                <FaExternalLinkAlt size={16} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 border border-gray-200 text-black rounded-xl hover:bg-gray-100 transition-colors font-medium flex-1 sm:flex-none"
              >
                <FaGithub size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden order-1 md:order-2 bg-gray-50 flex items-center justify-center p-8 border-l border-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-full object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <section id="projects" className="py-24 relative bg-gray-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <motion.h2 variants={textVariants} className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Featured <span className="text-[var(--color-primary)]">Projects</span>
          </motion.h2>
          <motion.div variants={textVariants} className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full mb-6"></motion.div>
          <motion.p variants={textVariants} className="text-gray-500 max-w-2xl mx-auto text-lg px-4">
            A curated selection of my recent work.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-[10vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - ( (projects.length - 1 - i) * 0.05 );
          return (
            <Card 
              key={project.id} 
              project={project} 
              index={i} 
              progress={scrollYProgress} 
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
