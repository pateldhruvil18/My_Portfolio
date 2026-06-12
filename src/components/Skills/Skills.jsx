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
      { name: 'Express', icon: SiExpress, level: 85, color: '#888888' },
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-16 md:py-24 relative bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={textVariants} className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Technical <span className="text-[var(--color-primary)]">Skills</span>
          </motion.h2>
          <motion.div variants={textVariants} className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></motion.div>
          <motion.p variants={textVariants} className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            A showcase of my technical proficiency and the tools I use to build modern applications.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-black mb-6 border-b border-gray-200 pb-2">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <Tilt
                    key={index}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    scale={1.02}
                    transitionSpeed={2500}
                    className="bg-white border border-gray-100 shadow-sm p-4 rounded-[16px] flex flex-col items-center justify-center gap-4 group hover:shadow-md transition-shadow"
                  >
                    <div className="w-16 h-16 relative">
                      <CircularProgressbar
                        value={inView ? skill.level : 0}
                        styles={buildStyles({
                          pathTransitionDuration: 2,
                          pathColor: skill.color,
                          trailColor: '#F5F5F5',
                          strokeLinecap: 'round',
                        })}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <skill.icon size={24} style={{ color: skill.color }} className="group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-600 group-hover:text-[var(--color-primary)] transition-colors text-center">
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