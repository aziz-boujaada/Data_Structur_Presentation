import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { slides } from './slides';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Spacebar' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="w-screen h-screen bg-slate-950 flex flex-col text-slate-50 overflow-hidden relative selection:bg-java-orange selection:text-slate-900">
      
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-java-blue/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-java-orange/5 blur-[120px]" />
      </div>

      {/* Main Slide Area */}
      <main className="flex-1 relative z-10 w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            className="w-full h-full absolute inset-0 overflow-y-auto overflow-x-hidden"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Controls & Progress */}
      <footer className="h-16 shrink-0 border-t border-slate-800 bg-slate-950/80 backdrop-blur z-20 flex items-center justify-between px-6 relative">
        <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
          <Layers className="w-4 h-4 text-java-orange" />
          Java Data Structures
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-300"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="font-mono text-sm text-slate-400 w-16 text-center">
            {currentSlide + 1} / {totalSlides}
          </div>
          
          <button 
            onClick={nextSlide} 
            disabled={currentSlide === totalSlides - 1}
            className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-300"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </footer>

      {/* Progress bar */}
      <div className="h-1 bg-slate-900 w-full absolute bottom-0 left-0 z-30">
        <motion.div 
          className="h-full bg-gradient-to-r from-java-orange to-java-blue"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

    </div>
  );
}

export default App;
