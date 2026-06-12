import { useEffect } from 'react';
import Lenis from 'lenis';
import './App.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import GithubStats from './components/GithubStats/GithubStats';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='relative min-h-screen overflow-x-hidden bg-[var(--color-bg-main)] text-[var(--color-text-main)] selection:bg-primary/30'>
      <div className='relative z-10'>
        <Navbar />
        <main className='space-y-24'>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />

          <GithubStats />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;