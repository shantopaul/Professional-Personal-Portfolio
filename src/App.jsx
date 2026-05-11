import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import { ThemeProvider } from './hooks/useTheme';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
