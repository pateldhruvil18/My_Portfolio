import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../constants';
import { cn } from '../../lib/utils';

const BrowserMockup = ({ src, alt, containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax movement for the image inside the browser
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full rounded-2xl border border-gray-200 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden group"
    >
      {/* MacOS Window Controls */}
      <div className="h-10 border-b border-gray-100 bg-white/50 backdrop-blur-md flex items-center px-4 gap-2 relative z-10">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
      </div>
      
      {/* Image Container with Parallax & Hover Zoom */}
      <div className="relative overflow-hidden bg-gray-50 aspect-[16/10] sm:aspect-video flex items-start justify-center">
        <motion.div style={{ y }} className="w-full h-full">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover sm:object-contain object-top transform transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectSection = ({ project, index }) => {
  const sectionRef = useRef(null);
  
  return (
    <section 
      ref={sectionRef}
      className={cn(
        "py-20 md:py-32 relative overflow-hidden",
        index % 2 === 0 ? "bg-white" : "bg-slate-50"
      )}
    >
      {/* Optional decorative blur element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
          
          {/* Mobile Title (Order 1, Hidden on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col order-1 lg:hidden"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="h-px w-12 bg-gray-200"></div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[var(--color-primary)] text-xs font-bold tracking-wider uppercase border border-blue-100">
                {project.category || 'Featured'}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-black tracking-tight">
              {project.title}
            </h3>
          </motion.div>

          {/* Visual Side (Right 60%, Order 2 on Mobile, Order 2 on Desktop) */}
          <div className="w-full lg:w-[60%] order-2 lg:order-2">
            <BrowserMockup src={project.image} alt={project.title} containerRef={sectionRef} />
          </div>

          {/* Content Side (Left 40%, Order 3 on Mobile, Order 1 on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[40%] flex flex-col order-3 lg:order-1 mt-4 lg:mt-0"
          >
            {/* Desktop Title (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center gap-4 mb-6">
              <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="h-px w-12 bg-gray-200"></div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[var(--color-primary)] text-xs font-bold tracking-wider uppercase border border-blue-100">
                {project.category || 'Featured'}
              </span>
            </div>

            <h3 className="hidden lg:block text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              {project.title}
            </h3>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-sm font-medium text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              {project.webapp && project.webapp !== '#' && (
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-medium shadow-lg flex-1 sm:flex-none transform hover:-translate-y-1 duration-300"
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
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-black rounded-xl hover:bg-gray-50 transition-colors font-medium shadow-sm flex-1 sm:flex-none transform hover:-translate-y-1 duration-300"
                >
                  <FaGithub size={18} />
                  Source Code
                </a>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="relative bg-white overflow-hidden">
      {/* Section Header */}
      <section className="pt-24 md:pt-32 pb-12 bg-white relative">
        {/* Subtle grid background for the header */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
          style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight"
          >
            Featured <span className="text-gray-400">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl"
          >
            A showcase of modern web applications, bringing innovative ideas to life with clean code and premium design.
          </motion.p>
        </div>
      </section>

      {/* Projects Flow */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
