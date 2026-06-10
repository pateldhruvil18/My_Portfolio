import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitHubCalendar } from 'react-github-calendar';

const GithubStats = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="github" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GitHub <span className="text-gradient">Contributions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            A visual representation of my open-source contributions and daily coding habits.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-4 sm:p-8 rounded-3xl overflow-x-auto flex justify-center border border-white/10 shadow-2xl custom-scrollbar"
        >
          <div className="min-w-fit p-4 bg-white/5 rounded-2xl">
            <GitHubCalendar 
              username="pateldhruvil18" 
              blockSize={16}
              blockMargin={6}
              colorScheme="dark"
              theme={{
                dark: ['#1e1e2e', '#4f46e5', '#6366f1', '#8b5cf6', '#d8b4fe'],
              }}
              fontSize={14}
            />
          </div>
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex justify-center"
          >
            <img 
              src="https://github-readme-stats.vercel.app/api?username=pateldhruvil18&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117" 
              alt="Dhruvil's GitHub Stats" 
              className="w-full max-w-md rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full flex justify-center"
          >
            <img 
              src="https://github-readme-streak-stats.herokuapp.com/?user=pateldhruvil18&theme=tokyonight&hide_border=true&background=0D1117" 
              alt="Dhruvil's GitHub Streak" 
              className="w-full max-w-md rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
