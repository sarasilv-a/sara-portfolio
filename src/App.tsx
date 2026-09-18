import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Reveal from './components/Reveal'

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.12,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </>
  )
}

export default App




/* import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App */