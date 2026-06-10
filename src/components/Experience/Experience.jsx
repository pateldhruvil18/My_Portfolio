import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    title: 'MERN Stack Developer Intern',
    company: 'Brainy Beam Technologies',
    date: 'Jan 2024 - Present',
    description: 'Developing and maintaining scalable web applications using the MERN stack. Collaborating with cross-functional teams to deliver high-quality software solutions.',
    type: 'work',
    icon: <FaBriefcase />,
  },
  {
    id: 2,
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    date: 'Jun 2023 - Present',
    description: 'Designed and developed custom websites for local businesses, focusing on responsive design, performance optimization, and SEO best practices.',
    type: 'work',
    icon: <FaBriefcase />,
  },
  {
    id: 3,
    title: 'B.Tech in Computer Engineering',
    company: 'University Name',
    date: '2020 - 2024',
    description: 'Focused on core computer science subjects including Data Structures, Algorithms, Database Management Systems, and Software Engineering.',
    type: 'education',
    icon: <FaGraduationCap />,
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my professional experience and educational background.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center md:justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Center dot/icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-bg-darker border-4 border-primary transform -translate-x-1/2 flex items-center justify-center text-primary z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                >
                  {exp.icon}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
                >
                  <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                    <span className="text-accent font-semibold text-sm mb-2 block">{exp.date}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
