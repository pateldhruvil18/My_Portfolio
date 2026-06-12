import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    title: 'MERN Stack Developer',
    company: 'Demaze Technologies',
    date: 'Dec 2025 - Present',
    description: 'Working on full-stack development, building premium digital experiences with modern web technologies.',
    type: 'work',
    icon: <FaBriefcase />,
  },
  {
    id: 2,
    title: 'MERN Stack Developer Intern',
    company: 'Brainy Beam Technologies',
    date: '1 Month',
    description: 'Developed and maintained scalable web applications using the MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    type: 'work',
    icon: <FaBriefcase />,
  },
  {
    id: 3,
    title: 'B.E. in Computer Engineering',
    company: 'LDRP-ITR Gandhinagar',
    date: '2022 - 2026',
    description: 'Focusing on core computer science subjects including Data Structures, Algorithms, Database Management Systems, and Web Development.',
    type: 'education',
    icon: <FaGraduationCap />,
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
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
    <section id="experience" className="py-16 md:py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={textVariants} className="text-4xl md:text-5xl font-bold mb-4 text-black">
            My <span className="text-[var(--color-primary)]">Journey</span>
          </motion.h2>
          <motion.div variants={textVariants} className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></motion.div>
          <motion.p variants={textVariants} className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            A timeline of my professional experience and educational background.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center md:justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Center dot/icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-[var(--color-primary)] transform -translate-x-1/2 flex items-center justify-center text-[var(--color-primary)] z-10 shadow-sm"
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
                  <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-[22px] hover:-translate-y-2 hover:shadow-md transition-all duration-300">
                    <span className="text-[var(--color-primary)] font-semibold text-sm mb-2 block">{exp.date}</span>
                    <h3 className="text-xl font-bold text-black mb-1">{exp.title}</h3>
                    <h4 className="text-gray-600 font-medium mb-4">{exp.company}</h4>
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
