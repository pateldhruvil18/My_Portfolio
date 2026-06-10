import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/pateldhruvil18', name: 'GitHub' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/pateldhruvil18', name: 'LinkedIn' },
    { icon: <FaInstagram size={20} />, url: 'https://instagram.com/pateldhruvil18', name: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
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

  return (
    <footer className="relative pt-20 pb-10 border-t border-white/10 bg-bg-darker overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Description */}
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="font-bold text-gradient text-lg">D</span>
              </div>
              <span className="font-bold text-xl tracking-wider text-white">Dhruvil.</span>
            </a>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
              Building premium digital experiences with modern web technologies. Focused on design, performance, and user experience.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Frontend Development</li>
              <li className="text-gray-400">Backend Development</li>
              <li className="text-gray-400">UI/UX Implementation</li>
              <li className="text-gray-400">Performance Optimization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            © {currentYear} Dhruvil Patel. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;