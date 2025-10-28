import { motion } from 'motion/react';
import navigationSystemImage from 'figma:asset/596d4cbdc38fd576962a3a95baaa9433c38f22fd.png';
import piezoelectricArrayImage from 'figma:asset/fae5d1d43a4fecae4fc768beb8fa8629404fe077.png';

export function WorkingMechanismSection() {
  return (
    <div className="px-6 py-20 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="mb-12 text-white font-bold text-5xl">Working Mechanism</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="bg-white p-6 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -70, rotateY: -25, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1 
            }}
            whileHover={{ 
              scale: 1.06,
              rotateY: 8,
              y: -12,
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
              transition: { duration: 0.4 }
            }}
          >
            <h3 className="text-purple-700 text-center mb-4 font-bold text-2xl">Navigation System Components</h3>
            <motion.img
              src={navigationSystemImage}
              alt="Ultrasound Navigation System"
              className="w-full h-auto rounded-lg"
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.05) contrast(1.05)"
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: 70, rotateY: 25, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.06,
              rotateY: -8,
              y: -12,
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
              transition: { duration: 0.4 }
            }}
          >
            <h3 className="text-purple-700 text-center mb-4 font-bold text-2xl">Piezoelectric Array Technology</h3>
            <motion.img
              src={piezoelectricArrayImage}
              alt="Piezoelectric Array Diagram"
              className="w-full h-auto rounded-lg"
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.05) contrast(1.05)"
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
        
        <div className="text-white space-y-6 leading-relaxed">
          <p>
            3D ultrasound imaging operates on the fundamental principles of sound wave propagation and echo detection. 
            The process begins with an ultrasound transducer that emits high-frequency sound waves (typically 2-18 MHz) 
            into the body. These waves travel through different tissues at varying speeds and are partially reflected 
            back to the transducer when they encounter boundaries between different tissue types.
          </p>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Data Acquisition</h3>
          <p>
            Unlike traditional 2D ultrasound that captures a single plane, 3D ultrasound acquires volumetric data through 
            one of several methods:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Freehand acquisition:</strong> The operator manually sweeps the transducer across the region of interest</li>
            <li><strong>Mechanical scanning:</strong> An automated motor moves the transducer to capture multiple parallel slices</li>
            <li><strong>Electronic scanning:</strong> 2D array transducers electronically steer the ultrasound beam in three dimensions</li>
          </ul>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Image Reconstruction</h3>
          <p>
            Once the raw data is collected, sophisticated algorithms process the information to create a 3D volume. 
            This involves:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Spatial registration of individual 2D slices</li>
            <li>Interpolation between slices to fill gaps</li>
            <li>Volume rendering to create a 3D representation</li>
            <li>Application of filters to reduce noise and enhance contrast</li>
          </ul>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Visualization</h3>
          <p>
            The reconstructed 3D data can be displayed in various ways, including surface rendering, volume rendering, 
            and multi-planar reconstruction. Users can manipulate the image by rotating, zooming, and slicing through 
            the volume to examine structures from any angle, providing comprehensive spatial information that is 
            impossible to obtain with conventional 2D imaging.
          </p>
        </div>
      </div>
    </div>
  );
}
