import React from 'react';
import { experiences } from '../../constants';

function Experince() {
  // Show only the first internship experience
  const internshipExperience = experiences.filter(exp => exp.id === 0);

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 rounded-full text-sm font-semibold mb-8 border border-amber-500/30 backdrop-blur-sm">
            <span className="mr-2">💼</span>
            Professional Experience
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Internship
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            My professional internship experience that provided hands-on industry exposure and enhanced my development skills
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-5xl mx-auto">
          {internshipExperience.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Main Experience Card */}
              <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-700/50 hover:border-amber-500/30 hover:bg-slate-800/60 group">

                {/* Company Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
                  <div className="flex items-center gap-8 mb-6 lg:mb-0">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 p-6 flex items-center justify-center backdrop-blur-sm">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-contain rounded-lg filter brightness-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg items-center justify-center">
                        <span className="text-white font-bold text-xl">{experience.company.charAt(0)}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300 mb-2">
                        {experience.role}
                      </h3>
                      <p className="text-amber-300 font-semibold text-xl">{experience.company}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 px-8 py-4 rounded-2xl backdrop-blur-sm">
                    <span className="text-amber-300 text-base font-semibold">{experience.date}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-10">
                  <h4 className="text-xl font-semibold text-white mb-4">What I Accomplished</h4>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {experience.desc}
                  </p>
                </div>

                {/* Skills & Technologies */}
                <div className="mb-10">
                  <h4 className="text-xl font-semibold text-white mb-6">Technologies & Skills Used</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {experience.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-slate-700/30 border border-slate-600/50 rounded-2xl p-4 text-center hover:border-amber-500/50 hover:bg-amber-500/20 transition-all duration-300 group"
                      >
                        <span className="text-slate-300 group-hover:text-amber-300 font-medium text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 border border-amber-500/20">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Successfully completed intensive 1-month MERN stack development program</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Contributed to real-world projects and gained hands-on industry experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Collaborated with senior developers and learned industry best practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Enhanced full-stack development skills and modern web technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-700/50 hover:border-amber-500/30 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">1 Month</div>
            <p className="text-white font-semibold text-lg mb-2">Internship Duration</p>
            <p className="text-slate-300 text-sm">Intensive Learning</p>
          </div>

          <div className="text-center bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-700/50 hover:border-amber-500/30 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">MERN</div>
            <p className="text-white font-semibold text-lg mb-2">Stack Expertise</p>
            <p className="text-slate-300 text-sm">Full-Stack Development</p>
          </div>

          <div className="text-center bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-700/50 hover:border-amber-500/30 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">2024</div>
            <p className="text-white font-semibold text-lg mb-2">Recent Experience</p>
            <p className="text-slate-300 text-sm">Industry Exposure</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24 max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-slate-700/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-3xl"></div>
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for New Opportunities
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                With hands-on internship experience and a passion for learning, I'm excited to contribute to innovative projects
                and continue growing as a developer. Let's discuss how I can add value to your team!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('work');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="border-2 border-slate-600 text-slate-300 hover:border-amber-500 hover:text-amber-300 hover:bg-amber-500/10 px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  View My Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experince;
