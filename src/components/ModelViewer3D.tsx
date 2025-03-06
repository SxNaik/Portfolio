import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

interface ModelViewerProps {
  title: string;
  description?: string;
}

export function ModelViewer3D({ title, description }: ModelViewerProps) {
  const [rotation, setRotation] = useState({ x: 15, y: 45 });
  const [autoRotate, setAutoRotate] = useState(true);
  const [mouseDown, setMouseDown] = useState(false);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  
  // Auto rotation effect
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setRotation(prev => ({
        ...prev,
        y: prev.y + 0.3
      }));
    }, 30);
    
    return () => clearInterval(interval);
  }, [autoRotate]);
  
  // Mouse control handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setAutoRotate(false);
    setMouseDown(true);
    lastMousePosition.current = { x: e.clientX, y: e.clientY };
  };
  
  const handleMouseUp = () => {
    setMouseDown(false);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mouseDown) return;
    
    const deltaX = e.clientX - lastMousePosition.current.x;
    const deltaY = e.clientY - lastMousePosition.current.y;
    
    setRotation(prev => ({
      x: Math.min(Math.max(prev.x - deltaY * 0.5, -30), 30),
      y: prev.y + deltaX * 0.5
    }));
    
    lastMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setAutoRotate(false);
    setMouseDown(true);
    lastMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!mouseDown) return;
    
    const deltaX = e.touches[0].clientX - lastMousePosition.current.x;
    const deltaY = e.touches[0].clientY - lastMousePosition.current.y;
    
    setRotation(prev => ({
      x: Math.min(Math.max(prev.x - deltaY * 0.5, -30), 30),
      y: prev.y + deltaX * 0.5
    }));
    
    lastMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  
  const handleTouchEnd = () => {
    setMouseDown(false);
  };

  // Restart auto-rotation after inactivity
  useEffect(() => {
    if (mouseDown) return;
    
    const timer = setTimeout(() => {
      setAutoRotate(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [mouseDown]);

  // Cube face data
  const faces = [
    { 
      color: 'from-blue-400 to-blue-500', 
      text: '3D',
      transform: 'translateZ(100px)',
      shadow: '0 0 20px rgba(59, 130, 246, 0.3)'
    },
    { 
      color: 'from-purple-400 to-purple-500', 
      text: 'Web',
      transform: 'rotateY(180deg) translateZ(100px)',
      shadow: '0 0 20px rgba(139, 92, 246, 0.3)'
    },
    { 
      color: 'from-green-400 to-green-500', 
      text: 'Design',
      transform: 'rotateY(90deg) translateZ(100px)',
      shadow: '0 0 20px rgba(52, 211, 153, 0.3)'
    },
    { 
      color: 'from-red-400 to-red-500', 
      text: 'UX',
      transform: 'rotateY(-90deg) translateZ(100px)',
      shadow: '0 0 20px rgba(248, 113, 113, 0.3)'
    },
    { 
      color: 'from-yellow-400 to-yellow-500', 
      text: 'UI',
      transform: 'rotateX(90deg) translateZ(100px)',
      shadow: '0 0 20px rgba(251, 191, 36, 0.3)'
    },
    { 
      color: 'from-pink-400 to-pink-500', 
      text: 'Creative',
      transform: 'rotateX(-90deg) translateZ(100px)',
      shadow: '0 0 20px rgba(244, 114, 182, 0.3)'
    },
  ];

  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center py-10 relative">
      <div 
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 3D scene container */}
        <div 
          className="perspective-[1200px] w-full h-full flex items-center justify-center"
        >
          {/* Cube */}
          <div
            className="relative w-[200px] h-[200px] transform-style-preserve-3d"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: autoRotate ? 'transform 0.2s ease' : 'none'
            }}
          >
            {faces.map((face, index) => (
              <div
                key={index}
                className={cn(
                  'absolute w-full h-full flex items-center justify-center',
                  'bg-gradient-to-br rounded-lg backdrop-blur-sm',
                  'text-white text-2xl font-bold',
                  'border border-white/10',
                  face.color
                )}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: face.transform,
                  backfaceVisibility: 'hidden',
                  boxShadow: face.shadow,
                }}
              >
                <span className="drop-shadow-lg">{face.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-6"
      >
        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">{title}</h3>
        {description && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-sm mx-auto">
            {description}
          </p>
        )}
        <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-4">
          Click and drag to rotate • Double-click to reset view
        </p>
      </motion.div>
    </div>
  );
}
