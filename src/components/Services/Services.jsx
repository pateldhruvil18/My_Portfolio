import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaServer, FaMobileAlt, FaDatabase, FaRocket, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode size={32} />,
    title: 'Frontend Development',
    description: 'Building responsive, pixel-perfect, and highly interactive user interfaces using React.js and modern CSS frameworks like Tailwind.',
  },
  {
    icon: <FaServer size={32} />,
    title: 'Backend Development',
    description: 'Creating robust and scalable server-side applications and RESTful APIs using Node.js and Express.js.',
  },
  {
    icon: <FaDatabase size={32} />,
    title: 'Database Design',
    description: 'Designing efficient database schemas and managing data securely using MongoDB, PostgreSQL, or MySQL.',
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: 'Responsive Design',
    description: 'Ensuring your web application looks and functions perfectly across all devices, from mobile phones to ultra-wide desktop monitors.',
  },
  {
    icon: <FaPaintBrush size={32} />,
    title: 'UI/UX Implementation',
    description: 'Translating Figma designs into functional code with smooth animations using GSAP and Framer Motion for a premium feel.',
  },
  {
    icon: <FaRocket size={32} />,
    title: 'Performance Optimization',
    description: 'Optimizing web applications for maximum speed, accessibility, and SEO to achieve 95+ Lighthouse scores.',
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-16 md:py-24 relative bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            Comprehensive solutions to bring your digital ideas to life with state-of-the-art technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-[22px] group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden border border-gray-100 bg-white"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-blue-50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full z-0"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[var(--color-primary)] mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
