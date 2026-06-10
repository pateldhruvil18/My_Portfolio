import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../constants';

function Work() {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 rounded-full text-sm font-semibold mb-8 border border-amber-500/30 backdrop-blur-sm">
            <span className="mr-2">🚀</span>
            Featured Projects
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            My Creative
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            A showcase of projects that demonstrate my technical skills, creativity, and passion for building exceptional digital experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/40 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-700/50 hover:border-amber-500/30 hover:bg-slate-800/60 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56 bg-gradient-to-br from-slate-700 to-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/90 backdrop-blur-sm text-white p-4 rounded-2xl hover:scale-110 hover:bg-amber-500/20 transition-all duration-300 shadow-xl border border-slate-600/50"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/90 backdrop-blur-sm text-white p-4 rounded-2xl hover:scale-110 hover:bg-orange-500/20 transition-all duration-300 shadow-xl border border-slate-600/50"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-6 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-slate-700/50 text-slate-300 rounded-xl text-xs font-medium border border-slate-600/50 hover:border-amber-500/50 hover:text-amber-300 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-2 bg-slate-700/30 text-slate-400 rounded-xl text-xs border border-slate-600/30">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors duration-300 text-sm font-semibold"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-orange-300 transition-colors duration-300 text-sm font-semibold"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="text-center mt-20">
            <button
              onClick={loadMoreProjects}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-24 text-center max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-slate-700/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-3xl"></div>
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Explore More on GitHub
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover additional projects, open-source contributions, and code experiments on my GitHub profile.
                I'm constantly building and learning new technologies.
              </p>
              <a
                href="https://github.com/pateldhruvil18"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <FaGithub size={20} />
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;