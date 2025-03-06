import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/animations/loading.json';

interface IntroLoaderProps {
  onComplete?: () => void;
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [isNameTransitioning, setIsNameTransitioning] = useState(false);
  const [namePosition, setNamePosition] = useState({ x: 0, y: 0, scale: 1 });
  const nameRef = useRef<HTMLHeadingElement>(null);
  const lottieRef = useRef<any>(null);
  
  // Calculate position for name transition
  useEffect(() => {
    // Start transition after initial display
    const transitionTimer = setTimeout(() => {
      // Get the hero name element
      const heroNameElement = document.querySelector('.hero-name');
      
      if (heroNameElement && nameRef.current) {
        // Get positions and dimensions
        const introRect = nameRef.current.getBoundingClientRect();
        const heroRect = heroNameElement.getBoundingClientRect();
        
        // Calculate the transformation needed
        const scaleX = heroRect.width / introRect.width;
        const scaleY = heroRect.height / introRect.height;
        const scale = Math.min(scaleX, scaleY);
        
        // Calculate the center points
        const introCenterX = introRect.left + introRect.width / 2;
        const introCenterY = introRect.top + introRect.height / 2;
        const heroCenterX = heroRect.left + heroRect.width / 2;
        const heroCenterY = heroRect.top + heroRect.height / 2;
        
        // Calculate the translation
        const translateX = heroCenterX - introCenterX;
        const translateY = heroCenterY - introCenterY;
        
        // Set the position for animation
        setNamePosition({
          x: translateX,
          y: translateY,
          scale: scale
        });
        
        // Start the transition
        setIsNameTransitioning(true);
        
        // Make hero name initially invisible
        if (heroNameElement instanceof HTMLElement) {
          heroNameElement.style.opacity = '0';
          
          // Make hero name visible after transition completes
          setTimeout(() => {
            if (heroNameElement instanceof HTMLElement) {
              heroNameElement.style.opacity = '1';
            }
          }, 1000);
        }
      }
    }, 3500);
    
    // Complete intro after name transitions (4.5 seconds total)
    const completeTimer = setTimeout(() => {
      setShowIntro(false);
      if (onComplete) onComplete();
    }, 4500);
    
    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);
  
  // Easing functions similar to Dennis Snellenberg's site
  const easing = [0.83, 0, 0.17, 1];
  
  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.6, 
              ease: easing 
            }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111111] text-white overflow-hidden"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-1">
              <motion.div
                key="name-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  y: 0 
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: easing,
                  delay: 0.2
                }}
                className="relative"
              >
                <motion.h1 
                  ref={nameRef}
                  animate={{
                    x: isNameTransitioning ? namePosition.x : 0,
                    y: isNameTransitioning ? namePosition.y : 0,
                    scale: isNameTransitioning ? namePosition.scale : 1,
                    color: isNameTransitioning ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 1)',
                  }}
                  transition={{
                    duration: 1,
                    ease: easing,
                  }}
                  className="font-bold text-4xl sm:text-5xl md:text-7xl tracking-tighter"
                >
                  SIDDHARTH CHOUHAN
                </motion.h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: isNameTransitioning ? 0 : 1 
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: easing,
                  delay: 0.8
                }}
                className="text-zinc-500 text-sm font-light tracking-widest"
              >
                3D DESIGNER & DEVELOPER
              </motion.p>
            </div>
            
            {/* Lottie Animation below the name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isNameTransitioning ? 0 : 1 
              }}
              transition={{ 
                duration: 0.5, 
                ease: easing,
                delay: 1
              }}
              className="w-[120px] h-[120px] my-2"
            >
              <Lottie 
                animationData={loadingAnimation} 
                loop={true}
                autoplay={true}
                lottieRef={lottieRef}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ 
                opacity: isNameTransitioning ? 0 : 1, 
                scaleX: isNameTransitioning ? 0 : 1
              }}
              transition={{ 
                scaleX: { 
                  duration: 1.2, 
                  ease: easing 
                },
                opacity: { 
                  duration: 0.3, 
                  ease: easing 
                }
              }}
              className="w-[280px] sm:w-[320px] md:w-[380px] h-[2px] bg-white mt-4 origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
