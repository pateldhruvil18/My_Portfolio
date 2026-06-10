import { useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { cn } from '../../lib/utils';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const socialLinks = [
    { icon: <FaGithub size={18} />, url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin size={18} />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FaInstagram size={18} />, url: 'https://instagram.com/yourusername' },
    { icon: <HiOutlineMail size={20} />, url: 'mailto:your.email@example.com' }
  ];

  const menuItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = useCallback((sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'glass-effect border-b' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick('home');
              }}
              className="flex items-center space-x-2 group relative"
            >
              <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <span className="text-white font-bold text-lg text-gradient">D</span>
              </div>
              <span className="text-white font-bold tracking-wider hidden sm:block group-hover:text-primary transition-colors">
                Dhruvil.
              </span>
            </a>
          </div>

          <div className="hidden lg:flex gap-3 items-center space-x-8">
            <div className="flex space-x-1 gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group"
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary/20 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className={cn(
                    'relative z-10 transition-colors duration-300',
                    activeSection === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  )}>
                    {item.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4 ml-4 gap-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  whileHover={{ y: -3, scale: 1.1 }}
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleMenuClick('contact')}
                className="ml-2 px-6 py-2 bg-white text-bg-darker rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Let&apos;s Talk
              </motion.button>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-primary via-secondary to-accent origin-left"
        style={{ scaleX }}
      />

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className={cn(
          'lg:hidden overflow-hidden glass-effect border-t-0',
          !isOpen && 'pointer-events-none'
        )}
      >
        <div className="px-4 py-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={cn(
                'block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all',
                activeSection === item.id
                  ? 'bg-primary/20 text-white border border-primary/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              )}
            >
              {item.name}
            </button>
          ))}
          <div className="flex justify-center space-x-6 pt-6 pb-2 border-t border-white/10 mt-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;