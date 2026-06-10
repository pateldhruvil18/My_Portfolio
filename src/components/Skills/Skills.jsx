import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiMysql, SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJs, level: 85, color: '#F7DF1E' },
      { name: 'React', icon: FaReact, level: 88, color: '#61DAFB' },
      { name: 'Redux', icon: SiRedux, level: 80, color: '#764ABC' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' }
    ]
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 82, color: '#339933' },
      { name: 'Express', icon: SiExpress, level: 85, color: '#ffffff' },
      { name: 'MongoDB', icon: SiMongodb, level: 88, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, level: 75, color: '#4479A1' }
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: FaGithub, level: 85, color: '#F05032' },
      { name: 'Postman', icon: SiPostman, level: 90, color: '#FF6C37' },
      { name: 'VS Code', icon: VscVscode, level: 95, color: '#007ACC' }
    ]
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my technical proficiency and the tools I use to build modern applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-2">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <Tilt
                    key={index}
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    scale={1.05}
                    transitionSpeed={2500}
                    className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center gap-4 group"
                  >
                    <div className="w-16 h-16 relative">
                      <CircularProgressbar
                        value={inView ? skill.level : 0}
                        styles={buildStyles({
                          pathTransitionDuration: 2,
                          pathColor: skill.color,
                          trailColor: 'rgba(255,255,255,0.05)',
                          strokeLinecap: 'round',
                        })}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <skill.icon size={24} style={{ color: skill.color }} className="group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                      {skill.name}
                    </span>
                  </Tilt>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;