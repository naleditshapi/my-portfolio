import Navbar from './components/Navbar';
import Hero from './components/Hero.tsx';
import About from './components/About';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials.tsx';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}