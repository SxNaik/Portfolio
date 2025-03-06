import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ModelViewer3D } from './components/ModelViewer3D';
import { IntroLoader } from './components/IntroLoader';
import { ThemeButton } from './components/ThemeButton';
import { Footer } from './components/Footer';
import { LocationIndicator } from './components/LocationIndicator';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  
  // Handle intro completion
  const handleIntroComplete = () => {
    setIntroComplete(true);
    // Enable scrolling after intro
    document.body.style.overflow = 'auto';
  };
  
  // Disable scrolling during intro
  useEffect(() => {
    if (!introComplete) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [introComplete]);

  return (
    <>
      {/* Intro Loader */}
      <IntroLoader onComplete={handleIntroComplete} />
      
      {/* Theme Toggle Button */}
      <ThemeButton />
      
      {/* Location Indicator */}
      <LocationIndicator />
      
      {/* Main Content */}
      <div className={`min-h-screen bg-white dark:bg-zinc-900 transition-opacity duration-1000 ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        
        <div className="py-16 bg-zinc-100 dark:bg-zinc-800">
          <div className="container mx-auto">
            <ModelViewer3D title="Interactive 3D Design" description="Experience immersive web-based 3D interactivity" />
          </div>
        </div>
        
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;