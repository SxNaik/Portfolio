import { motion } from 'framer-motion';
import { Code2, Laptop, Presentation, Box, Layers, RotateCw } from 'lucide-react';
import { cn } from '../lib/utils';

export function Hero() {
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with 3D-like gradients and particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900" />
      
      {/* Animated 3D-like shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large subtle shape */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-blue-500/20 dark:bg-blue-400/10 blur-3xl"
          style={{ mixBlendMode: 'plus-lighter' }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-purple-500/20 dark:bg-purple-400/10 blur-3xl"
          style={{ mixBlendMode: 'plus-lighter' }}
        />
      </div>
      
      {/* Floating 3D icons with better animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[Code2, Laptop, Presentation, Box, Layers, RotateCw].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0],
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.3,
              ease: "easeInOut"
            }}
          >
            <Icon
              size={index % 2 === 0 ? 28 : 22}
              className="text-zinc-600 dark:text-zinc-400"
              style={{
                filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))"
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Main content with 3D animations */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
          style={{ 
            transformStyle: "preserve-3d", 
            perspective: "1000px" 
          }}
        >
          <motion.h1
            initial={{ opacity: 0, z: -20 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className={cn(
              "text-5xl sm:text-6xl md:text-7xl font-bold hero-name",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-zinc-900 via-blue-800 to-zinc-600",
              "dark:from-zinc-100 dark:via-blue-300 dark:to-zinc-400"
            )}
            style={{ 
              textShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transform: "translateZ(20px)",
              pointerEvents: "none" // Prevent interaction during animation
            }}
          >
            SIDDHARTH CHOUHAN
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, z: -10 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 mb-2"
            style={{ transform: "translateZ(10px)" }}
          >
            <span className="px-4 py-1 rounded-full text-xl md:text-2xl text-zinc-100 bg-zinc-800/90 dark:bg-zinc-100/90 dark:text-zinc-900 font-medium">
              Turning Ideas into Reality
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 text-lg md:text-xl text-zinc-600 dark:text-zinc-400"
          >
            Full-Stack Developer • 3D Designer • Content Creator
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#about"
            onClick={handleExploreClick}
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "px-8 py-3 rounded-full",
              "bg-zinc-900 text-zinc-100",
              "dark:bg-zinc-100 dark:text-zinc-900",
              "transition-all duration-200",
              "font-medium text-lg",
              "shadow-lg hover:shadow-xl",
              "flex items-center justify-center",
              "w-full sm:w-auto"
            )}
            style={{
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
          >
            Explore My Work
          </motion.a>
          
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "px-8 py-3 rounded-full",
              "bg-transparent text-zinc-800 border-2 border-zinc-800",
              "dark:text-zinc-200 dark:border-zinc-200",
              "transition-all duration-200",
              "font-medium text-lg",
              "hover:bg-zinc-100 dark:hover:bg-zinc-800/30",
              "flex items-center justify-center",
              "w-full sm:w-auto"
            )}
          >
            View 3D Projects
          </motion.a>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="flex flex-col items-center"
        >
          <motion.p
            className="text-sm text-zinc-600 dark:text-zinc-400 mb-2"
          >
            Scroll Down
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-zinc-600 dark:border-zinc-400 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-zinc-600 dark:bg-zinc-400 mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}