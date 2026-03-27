import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mainDevice from '../assets/ce8a81d5f97cf1646a9540d7cb2a84faeba0cd25.png';
import introImage from '../assets/a329a55047f6225b07cf0c3e57acc93f1594db39.png';
import workingMechImage from '../assets/356df669dcf5c04d45622f87ee64dd2d97850c6a.png';
import centerImage1 from '../assets/f8fc67a5d7d0d7e5a31560712a9ebb98cd189d89.png';
import newUltrasoundMachine from '../assets/f57205c0edc8ec176dcee06ddd109c80e9159443.png';

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}



interface Confetti {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  scale: number;
}

interface Topic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  bgWord: string;
  centerImage?: string;
}

const topics: Topic[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    subtitle: '3D Imaging',
    description: 'Discover a world of volumetric visualization with our revolutionary 3D ultrasound imaging. At the forefront of medical technology, we believe in the power of advanced diagnostics to bring you comprehensive spatial insights.',
    image: introImage,
    color: '#6366f1',
    bgWord: 'IMAGING',
    centerImage: centerImage1
  },
  // {
  //   id: 'history',
  //   title: 'History',
  //   subtitle: 'Evolution',
  //   description: 'Trace the remarkable journey from experimental technology in the 1980s to today\'s sophisticated systems. Experience how innovation transformed medical imaging into an essential diagnostic tool.',
  //   image: 'src/assets/4.1.gif',
  //   color: '#8b5cf6',
  //   bgWord: 'EVOLUTION',
  //   centerImage: 'src/assets/4.png',
  // },
  {
    id: 'working-mechanism',
    title: 'Technology',
    subtitle: 'Working Mechanism',
    description: 'Explore the sophisticated science of sound wave propagation with our premium imaging systems. Advanced signal processing algorithms compile multiple 2D slices to bring you detailed three-dimensional excellence.',
    image: workingMechImage,
    color: '#ec4899',
    bgWord: 'TECHNOLOGY',
    centerImage: newUltrasoundMachine
  }
  // {
  //   id: 'Instrumentation',
  //   title: 'Instrumentation',
  //   subtitle: 'Instrumentation',
  //   description: 'Discover state-of-the-art components in our modern ultrasound systems. From high-frequency transducers to powerful processors, every element combines to deliver exceptional imaging quality.',
  //   image: 'src/assets/3.gif',
  //   color: '#06b6d4',
  //   bgWord: 'INSTRUMENTATION',
  //   centerImage: 'src/assets/3.3.png',
  // },
  // {
  //   id: 'Advantages',
  //   title: 'Advantages',
  //   subtitle: 'Advantages',
  //   description: 'Experience enhanced visualization and improved diagnostic accuracy with our imaging solutions. Superior patient communication and intuitive 3D representations make complex diagnoses simple and effective.',
  //   image: 'src/assets/5.1.gif',
  //   color: '#10b981',
  //   bgWord: 'ADVANTAGES',
  //   centerImage: 'src/assets/5.png',
  // },
  // {
  //   id: 'disadvantages',
  //   title: 'disadvantages',
  //   subtitle: 'Disadvantages',
  //   description: 'Understanding limitations ensures optimal clinical application. Learn about technical considerations, investment factors, and training requirements to make informed decisions for your practice.',
  //   image: 'src/assets/2.gif',
  //   color: '#f59e0b',
  //   bgWord: 'DISADVANTAGES',
  //   centerImage: 'src/assets/1.png',
  // }
];

const applications = [
  { name: 'Obstetrics', color: '#ec4899' },
  { name: 'Cardiology', color: '#8b5cf6' },
  { name: 'Oncology', color: '#06b6d4' }
];


const floatingElements = [
  { x: '80%', y: '20%', size: 120, delay: 0 },  
  { x: '75%', y: '15%', size: 100, delay: 0.5 }, 
  { x: '10%', y: '70%', size: 90, delay: 1 },   
  { x: '15%', y: '65%', size: 110, delay: 1.5 }, 
  { x: '50%', y: '10%', size: 80, delay: 2 },    
];


export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedApp, setSelectedApp] = useState<number | null>(null);
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [showScroll, setShowScroll] = useState(false);
  
  const currentTopic = topics[currentIndex];

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowScroll(scrollPercentage > 70 && scrollPercentage < 98);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? topics.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === topics.length - 1 ? 0 : prev + 1));
  };
  
  const handleExplore = () => {
    onNavigate(currentTopic.id);
  };
  
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const handleAppClick = (index: number) => {
    setSelectedApp(index);
    triggerConfetti();
    
    setTimeout(() => {
      setSelectedApp(null);
    }, 1000);
  };

  const triggerConfetti = () => {
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2', '#FF1493', '#00CED1'];
    const newConfetti: Confetti[] = [];
    
    for (let i = 0; i < 50; i++) {
      const angle = (Math.PI * 2 * i) / 50;
      const velocity = 200 + Math.random() * 200;
      newConfetti.push({
        id: Date.now() + i,
        x: Math.cos(angle) * velocity,
        y: Math.sin(angle) * velocity - Math.random() * 100, 
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 720,
        scale: Math.random() * 0.8 + 0.6
      });
    }
    
    setConfetti(newConfetti);
    
    setTimeout(() => {
      setConfetti([]);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500 overflow-hidden">
      {/* Large background word */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div 
          key={currentTopic.bgWord}
          className="text-white uppercase tracking-wider select-none opacity-[0.08]"
          style={{ 
            fontSize: 'clamp(12rem, 30vw, 35rem)',
            fontWeight: '900',
            lineHeight: '0.8',
            whiteSpace: 'nowrap'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {currentTopic.bgWord}
        </motion.div>
      </div>

      {/* Floating anatomical/wave elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
  {floatingElements.map((elem, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full opacity-10"
      style={{
        left: elem.x,
        top: elem.y,
        width: elem.size,
        height: elem.size,
        background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2))',
        border: '2px solid rgba(255,255,255,0.2)',
      }}
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
        opacity: [0.1, 0.15, 0.1],
      }}
      transition={{
        duration: 4 + i,
        repeat: Infinity,
        delay: elem.delay,
      }}
    />
  ))}
</div>


      {/* Wave pattern overlays */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="white" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>
      
      <div className="relative max-w-[1600px] mx-auto px-12 py-20 min-h-screen flex items-start pt-32">
        <div className="w-full grid grid-cols-12 gap-12 items-center">
          {/* Left side - Title and description (like Blackberry Blast) */}
          <div className="col-span-3 space-y-6 z-10">
            <motion.h1 
              key={currentTopic.subtitle}
              className="text-white leading-none"
              style={{ 
                fontSize: '3.5rem', 
                fontWeight: '400',
                letterSpacing: '0.02em'
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {currentTopic.subtitle}
            </motion.h1>
            
            <motion.p 
              key={currentTopic.description}
              className="text-white text-opacity-90 leading-relaxed"
              style={{ fontSize: '0.95rem' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {currentTopic.description}
            </motion.p>
            
            <motion.button
              onClick={handleExplore}
              className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg"
              style={{ fontSize: '1rem', fontWeight: '600' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See More
            </motion.button>
          </div>
          
          {/* Center - Main device image with navigation */}
          <div className="col-span-6 flex items-center justify-center gap-6 z-10">
            {/* Left arrow - dotted circle style */}
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 flex-shrink-0"
              style={{
                border: '2px dashed rgba(255, 255, 255, 0.6)',
                background: 'transparent'
              }}
            >
              <ChevronLeft className="text-white" size={20} strokeWidth={2.5} />
            </button>
            
            {/* Main device/probe image */}
            <div className="flex-1 flex items-center justify-center relative">
              {currentTopic.centerImage ? (
                typeof currentTopic.centerImage === 'string' && currentTopic.centerImage.startsWith('http') ? (
                  <motion.div
                    key={currentIndex}
                    className="w-full h-auto max-h-[600px] flex items-center justify-center"
                    style={{ maxWidth: '500px' }}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <ImageWithFallback
                      src={currentTopic.centerImage}
                      alt={currentTopic.subtitle}
                      className="w-full h-auto max-h-[600px] object-contain"
                      style={{ 
                        filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4))'
                      }}
                    />
                  </motion.div>
                ) : (
                  <motion.img
                    key={currentIndex}
                    src={currentTopic.centerImage}
                    alt={currentTopic.subtitle}
                    className="w-full h-auto max-h-[600px] object-contain"
                    style={{ 
                      filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4))',
                      maxWidth: '500px'
                    }}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                )
              ) : (
                <motion.img
                  key={currentIndex}
                  src={mainDevice}
                  alt="3D Ultrasound Device"
                  className="w-full h-auto max-h-[600px] object-contain"
                  style={{ 
                    filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4))',
                    maxWidth: '500px'
                  }}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              )}
              
              {/* Floating small anatomical images */}
              <motion.img
                src={currentTopic.image}
                alt="Medical scan"
                className="absolute rounded-2xl shadow-2xl opacity-80"
                style={{
                  width: '140px',
                  height: '140px',
                  objectFit: 'cover',
                  top: '10%',
                  left: '-25%',
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              
              <motion.img
                src={currentTopic.image}
                alt="Medical scan"
                className="absolute rounded-2xl shadow-2xl opacity-80"
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  bottom: '15%',
                  right: '-20%',
                }}
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </div>
            
            {/* Right arrow - dotted circle style */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 flex-shrink-0"
              style={{
                border: '2px dashed rgba(255, 255, 255, 0.6)',
                background: 'transparent'
              }}
            >
              <ChevronRight className="text-white" size={20} strokeWidth={2.5} />
            </button>
          </div>
          
          {/* Right side - Application spheres with balloon burst fireworks */}
          <div className="col-span-3 flex flex-col items-end gap-8 justify-center relative z-10">
            {applications.map((app, index) => (
              <div key={app.name} className="relative">
                <motion.button
                  onClick={() => handleAppClick(index)}
                  className="relative hover:scale-105 transition-transform duration-300"
                  style={{
                    width: '150px',
                    height: '150px',
                  }}
                  animate={selectedApp === index ? {
                    scale: [1, 1.6, 0.3],
                    opacity: [1, 1, 0],
                    rotate: [0, 180, 360]
                  } : {}}
                  transition={selectedApp === index ? { 
                    duration: 0.8,
                    times: [0, 0.6, 1],
                    ease: "easeInOut"
                  } : {}}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${app.color}, ${app.color}dd)`,
                      boxShadow: `
                        0 25px 70px ${app.color}88,
                        inset -12px -12px 35px rgba(0,0,0,0.25),
                        inset 12px 12px 35px rgba(255,255,255,0.35)
                      `,
                    }}
                    animate={selectedApp === index ? {
                      boxShadow: [
                        `0 25px 70px ${app.color}88, inset -12px -12px 35px rgba(0,0,0,0.25), inset 12px 12px 35px rgba(255,255,255,0.35)`,
                        `0 40px 100px ${app.color}ff, inset 0px 0px 0px rgba(0,0,0,0), inset 0px 0px 0px rgba(255,255,255,0)`,
                        `0 0px 0px ${app.color}00, inset 0px 0px 0px rgba(0,0,0,0), inset 0px 0px 0px rgba(255,255,255,0)`
                      ]
                    } : {}}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    animate={selectedApp === index ? {
                      opacity: [1, 1, 0]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <span 
                      className="text-white text-center px-3"
                      style={{ 
                        fontSize: '1.05rem',
                        fontWeight: '600',
                        textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                      }}
                    >
                      {app.name}
                    </span>
                  </motion.div>
                </motion.button>
                
                {/* Nighttime fireworks burst animation */}
                {selectedApp === index && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 100 }}>
                    <AnimatePresence>
                      {confetti.map((piece, i) => (
                        <motion.div
                          key={piece.id}
                          className="absolute"
                          style={{
                            width: '10px',
                            height: '10px',
                            backgroundColor: piece.color,
                            borderRadius: '50%',
                            boxShadow: `0 0 15px ${piece.color}, 0 0 30px ${piece.color}, 0 0 45px ${piece.color}`,
                            filter: 'brightness(1.5)',
                          }}
                          initial={{
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            x: piece.x,
                            y: piece.y,
                            opacity: [0, 1, 1, 0.8, 0],
                            scale: [0, 1.2, piece.scale, 0.6, 0],
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 3,
                            ease: "easeOut",
                            times: [0, 0.1, 0.4, 0.7, 1],
                            delay: i * 0.005, 
                          }}
                        >
                          {/* Trailing spark effect */}
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                              backgroundColor: piece.color,
                              opacity: 0.5,
                              filter: 'blur(4px)',
                            }}
                            animate={{
                              scale: [1, 1.5, 0],
                              opacity: [0.5, 0.3, 0],
                            }}
                            transition={{
                              duration: 3,
                              ease: "easeOut",
                            }}
                          />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom navigation circles */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {topics.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-white w-8' 
                : 'bg-white bg-opacity-40 hover:bg-opacity-60'
            }`}
          />
        ))}
      </div>
      
      {/* Scroll indicator - only shows when scrolled */}
      <motion.div 
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: showScroll ? 1 : 0,
          y: showScroll ? 0 : -20
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: showScroll ? 'auto' : 'none' }}
      >
        <button 
          onClick={scrollDown}
          className="relative transition-all duration-500 hover:scale-110"
          style={{ width: '60px', height: '60px' }}
        >
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #ffffff, #e0e0e0)',
              boxShadow: `
                0 10px 30px rgba(0,0,0,0.3),
                inset -6px -6px 20px rgba(0,0,0,0.15),
                inset 6px 6px 20px rgba(255,255,255,0.5)
              `,
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <ArrowDown className="text-gray-700" size={18} strokeWidth={2.5} />
          </div>
        </button>
      </motion.div>
    </div>
  );
}
