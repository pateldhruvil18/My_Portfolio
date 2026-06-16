import { useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { cn } from '../../lib/utils';
import profileImg from '../../assets/ai_profile_avatar.png';

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
    { icon: <FaGithub size={18} />, url: 'https://github.com/pateldhruvil18' },
    { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/dhruvil-patel-8a10b1273/' },
    { icon: <FaInstagram size={18} />, url: 'https://www.instagram.com/dh_chaudhary_18/' },
    { icon: <HiOutlineMail size={20} />, url: 'mailto:[EMAIL_ADDRESS]' }
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

    // Add a small delay to allow the mobile menu to close before scrolling
    setTimeout(() => {
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
    }, 150);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed inset-x-0 z-50 transition-all duration-500 ease-in-out',
        isScrolled
          ? 'top-4 w-[90%] md:max-w-4xl lg:max-w-6xl mx-auto bg-white/70 backdrop-blur-xl shadow-lg border border-white/50 rounded-full'
          : 'top-0 w-full bg-transparent border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={cn("flex justify-between items-center transition-all duration-300", isScrolled ? "h-14 md:h-16" : "h-20 lg:h-24")}>
          <div className="flex-shrink-0">
            <a
              href="#home"
              aria-label="Go to Home"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick('home');
              }}
              className="flex items-center space-x-2 group relative"
            >
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-md">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-black font-bold tracking-wider hidden sm:block group-hover:text-[var(--color-primary)] transition-colors">
                Dhruvil.
              </span>
            </a>
          </div>

          {/* Mobile Scrolled Profile Header */}
          <div className={cn(
            "absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 lg:hidden transition-all duration-500",
            isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          )}>
            <img src={profileImg} alt="Dhruvil Patel" className="w-8 h-8 rounded-full object-cover shadow-sm" />
            <span className="font-bold text-sm text-black tracking-wide">Dhruvil Patel</span>
          </div>

          <div className="hidden lg:flex gap-3 items-center space-x-8">
            <div className="flex space-x-1 gap-2 px-4 py-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  aria-label={`Navigate to ${item.name}`}
                  onClick={() => handleMenuClick(item.id)}
                  className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group"
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gray-100 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className={cn(
                    'relative z-10 transition-colors duration-300',
                    activeSection === item.id ? 'text-black' : 'text-gray-500 group-hover:text-black'
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
                  aria-label={`Visit my profile`}
                  className="text-gray-500 hover:text-[var(--color-primary)] transition-colors p-2"
                >
                  {link.icon}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Book A Call"
                onClick={() => handleMenuClick('contact')}
                className="ml-2 btn-primary !py-2 !px-5 text-sm"
              >
                Book A Call
              </motion.button>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className={cn(
          'lg:hidden overflow-y-auto max-h-[85vh] bg-white/95 backdrop-blur-xl border-gray-200 shadow-xl',
          isScrolled ? 'rounded-2xl mt-4 border mx-4' : 'border-b',
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
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-500 hover:text-black hover:bg-gray-50'
              )}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 pb-2 border-t border-gray-100 mt-2">
            <button
              onClick={() => handleMenuClick('contact')}
              className="w-full btn-primary !py-3 !px-5 text-sm font-medium rounded-xl mb-4"
            >
              Book A Call
            </button>
            <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my profile`}
                className="text-gray-500 hover:text-[var(--color-primary)] transition-colors p-3"
              >
                {link.icon}
              </a>
            ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;