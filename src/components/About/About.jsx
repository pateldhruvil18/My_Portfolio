import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaLaptopCode, FaAward } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    {
      icon: <FaLaptopCode size={24} />,
      count: 15,
      suffix: '+',
      label: 'Projects Completed',
      color: 'text-primary'
    },
    {
      icon: <FaGraduationCap size={24} />,
      count: 2,
      suffix: '',
      label: 'Internships',
      color: 'text-secondary'
    },
    {
      icon: <FaAward size={24} />,
      count: 100,
      suffix: '+',
      label: 'Problems Solved',
      color: 'text-accent'
    }
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold">
              Passionate Developer & <span className="text-gradient-accent">Tech Enthusiast</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a 4th-year Computer Science Engineering student with a strong passion for building innovative and scalable digital solutions. My journey in tech started with a curiosity for how things work on the internet, which quickly evolved into a deep dive into Full Stack Development.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              With hands-on experience in the MERN stack through internships and freelance projects, I specialize in crafting beautiful, high-performance user interfaces and robust backend systems. My career objective is to leverage my skills to solve real-world problems and contribute to impactful tech products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 ${
                  index === 2 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">
                  {inView ? (
                    <CountUp end={stat.count} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    '0'
                  )}
                </h4>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;