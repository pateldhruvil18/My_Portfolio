import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { education } from '../../constants';

function Eduction() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 rounded-full text-sm font-semibold mb-8 border border-amber-500/30 backdrop-blur-sm">
            <span className="mr-2">🎓</span>
            Academic Foundation
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Educational
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            The academic foundation and learning experiences that built my technical expertise and problem-solving abilities
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div key={edu.id} className="group bg-slate-800/40 backdrop-blur-xl rounded-3xl p-10 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-700/50 hover:border-amber-500/30 hover:bg-slate-800/60 hover:-translate-y-2">
              {/* Institution Header */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-8 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-slate-700/50 border border-slate-600/50 p-4 flex items-center justify-center">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain rounded-lg filter brightness-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg items-center justify-center">
                      <span className="text-white font-bold text-lg">{edu.school.charAt(0)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300 mb-3">
                    {edu.degree}
                  </h3>
                  <p className="text-amber-300 font-semibold text-xl mb-6">{edu.school}</p>

                  {/* Date and Grade */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 bg-slate-700/50 border border-slate-600/50 px-4 py-3 rounded-2xl backdrop-blur-sm">
                      <FaCalendarAlt className="text-amber-400" />
                      <span className="text-slate-300 text-sm font-semibold">{edu.date}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-700/50 border border-slate-600/50 px-4 py-3 rounded-2xl backdrop-blur-sm">
                      <FaAward className="text-emerald-400" />
                      <span className="text-slate-300 text-sm font-semibold">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed text-lg mb-8">
                {edu.desc}
              </p>

              {/* Achievement Badge */}
              <div className="inline-flex items-center gap-3 bg-emerald-500/20 text-emerald-300 px-6 py-3 rounded-2xl text-sm font-semibold border border-emerald-500/30 backdrop-blur-sm">
                <FaGraduationCap />
                <span>Academic Excellence</span>
              </div>
            </div>
          ))}
        </div>

        {/* Education Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-700/50 hover:border-amber-500/30 group">
            <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">B.Tech</div>
            <p className="text-white font-semibold text-xl mb-2">Bachelor's Degree</p>
            <p className="text-slate-300">Computer Science Engineering</p>
          </div>

          <div className="text-center bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-700/50 hover:border-amber-500/30 group">
            <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">4th</div>
            <p className="text-white font-semibold text-xl mb-2">Year Student</p>
            <p className="text-slate-300">Final Year</p>
          </div>

          <div className="text-center bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-700/50 hover:border-amber-500/30 group">
            <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">8.2</div>
            <p className="text-white font-semibold text-xl mb-2">CGPA</p>
            <p className="text-slate-300">Academic Excellence</p>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-24 text-center max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-slate-700/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-3xl"></div>
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Lifelong Learning Philosophy
              </h3>
              <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                Education is a continuous journey that extends far beyond graduation. I'm committed to staying
                current with emerging technologies, industry best practices, and innovative development methodologies.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
                  Continuous Growth
                </span>
                <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">
                  Knowledge Seeker
                </span>
                <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full border border-red-500/30">
                  Innovation Focused
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eduction;