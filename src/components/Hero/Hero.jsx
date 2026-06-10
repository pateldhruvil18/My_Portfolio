import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaDownload } from 'react-icons/fa';
import { cn } from '../../lib/utils';
import profileImg from '../../assets/profile.jpg';

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-4 py-2 rounded-full glass-effect text-sm font-medium text-primary border border-primary/20 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Available for work
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I&apos;m <span className="text-gradient">Dhruvil Patel</span>
              <br />
              <span className="text-3xl md:text-5xl text-gray-400 mt-4 block min-h-[60px]">
                <TypeAnimation
                  sequence={[
                    'MERN Stack Developer',
                    2000,
                    'React Developer',
                    2000,
                    'Full Stack Engineer',
                    2000,
                    'UI/UX Enthusiast',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-semibold text-white"
                />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              I build exceptional and accessible digital experiences for the web. Transforming ideas into elegant, high-performance applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => handleScroll('#projects')}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all duration-300 flex items-center gap-2 group shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
              >
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="/Dhruvil Patel.pdf" 
                download="Dhruvil_Patel_Resume.pdf"
                className="px-8 py-4 glass-effect text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 border border-white/20"
              >
                Download Resume
                <FaDownload />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-8">
              <span className="text-gray-500 font-medium uppercase tracking-wider text-sm">Connect with me</span>
              <div className="h-px bg-gray-800 flex-grow max-w-[100px]"></div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/pateldhruvil18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/pateldhruvil18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://twitter.com/pateldhruvil18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaTwitter size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-[100px] opacity-20 animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[2rem] glass-card overflow-hidden border border-white/10 p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-[1.5rem] bg-gray-800/50 overflow-hidden relative">
                  <img src={profileImg} alt="Dhruvil Patel" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-effect p-4 rounded-2xl border border-white/10 shadow-xl"
              >
                <div className="text-4xl">🚀</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-2xl border border-white/10 shadow-xl"
              >
                <div className="text-4xl">💻</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
