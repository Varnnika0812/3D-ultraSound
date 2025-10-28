import { motion } from 'motion/react';
import introImage from 'figma:asset/7ff605163bdfb2b3beab5d611ef9665e7204a270.png';

export function IntroductionSection() {
  return (
    <div className="px-6 py-20 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="mb-12 text-white font-bold text-5xl">Introduction</h2>
        
        <div className="flex justify-center mb-12">
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-2xl max-w-4xl"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ 
              scale: 1.03,
              rotateY: 5,
              boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6)",
              transition: { duration: 0.4 }
            }}
          >
            <motion.img 
              src={introImage}
              alt="3D Ultrasound Scan"
              className="w-full h-auto object-cover"
              initial={{ filter: "brightness(0.85) contrast(1.05)" }}
              whileHover={{ 
                filter: "brightness(1) contrast(1.1)",
                scale: 1.05
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
        
        <div className="text-white space-y-6 leading-relaxed">
          <p>
            3D Ultrasound Imaging represents a groundbreaking advancement in medical diagnostic technology. 
            This innovative technique transforms traditional 2D ultrasound data into comprehensive three-dimensional 
            volumetric images, offering healthcare professionals unprecedented insight into anatomical structures.
          </p>
          <p>
            Unlike conventional ultrasound imaging that provides flat, two-dimensional cross-sectional views, 
            3D ultrasound enables clinicians to visualize organs, tissues, and developing fetuses in their true 
            spatial form. This enhanced visualization capability has revolutionized prenatal care, oncology, 
            cardiology, and numerous other medical specialties.
          </p>
          <p>
            The technology leverages advanced signal processing and reconstruction algorithms to compile multiple 
            2D ultrasound slices into a cohesive three-dimensional representation. This allows for more accurate 
            diagnosis, improved treatment planning, and better patient communication, as the 3D images are more 
            intuitive and easier to understand than traditional 2D scans.
          </p>
        </div>
      </div>
    </div>
  );
}
