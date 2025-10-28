import { motion } from 'motion/react';

export function AdvantagesSection() {
  return (
    <div className="px-6 py-20 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="mb-12 text-white font-bold text-5xl">Advantages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="bg-neutral-50 p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -60, rotateY: -30, scale: 0.85 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ 
              scale: 1.06, 
              y: -15,
              rotateZ: -2,
              boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.4)",
              transition: { duration: 0.4 }
            }}
          >
            <h3 className="text-purple-700 mb-6 text-center font-bold text-2xl">Enhanced Visualization</h3>
            <motion.div 
              className="rounded-xl overflow-hidden"
              whileHover={{ 
                scale: 1.07,
                rotate: 1
              }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif" 
                alt="3D visualization animation"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-neutral-50 p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: 60, rotateY: 30, scale: 0.85 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15
            }}
            whileHover={{ 
              scale: 1.06, 
              y: -15,
              rotateZ: 2,
              boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.4)",
              transition: { duration: 0.4 }
            }}
          >
            <h3 className="text-purple-700 mb-6 text-center font-bold text-2xl">Real-Time Imaging</h3>
            <motion.div 
              className="rounded-xl overflow-hidden"
              whileHover={{ 
                scale: 1.07,
                rotate: -1
              }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="https://media.giphy.com/media/l0HlQXlQ3nHyLMvte/giphy.gif" 
                alt="Real-time scanning animation"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
        
        <div className="text-white space-y-6 leading-relaxed">
          <p>
            3D ultrasound imaging offers numerous benefits over traditional 2D ultrasound and other imaging modalities, 
            making it an invaluable tool in modern medical diagnostics.
          </p>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Enhanced Visualization</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Spatial Understanding:</strong> Provides comprehensive three-dimensional views of anatomical 
            structures, allowing for better spatial relationships and orientation</li>
            <li><strong>Multiple Viewing Planes:</strong> Enables examination from any angle after acquisition, including 
            planes that are difficult or impossible to obtain with conventional 2D scanning</li>
            <li><strong>Surface Rendering:</strong> Creates realistic surface representations particularly valuable in 
            obstetrics and for visualizing organ surfaces</li>
          </ul>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Clinical Benefits</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Improved Diagnostic Accuracy:</strong> Better detection and characterization of abnormalities 
            due to enhanced visualization capabilities</li>
            <li><strong>Reduced Examination Time:</strong> Volume acquisition can be performed quickly and reviewed later, 
            reducing patient scan time</li>
            <li><strong>Reproducible Measurements:</strong> Stored volumes allow for consistent measurements and 
            second opinions without requiring patient recall</li>
            <li><strong>Better Patient Communication:</strong> 3D images are more intuitive and easier for patients 
            to understand than 2D slices</li>
          </ul>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Safety and Accessibility</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Non-Invasive:</strong> No ionizing radiation, making it safe for pregnant women and repeated examinations</li>
            <li><strong>Real-Time Imaging:</strong> Provides immediate feedback during examination</li>
            <li><strong>Cost-Effective:</strong> Generally less expensive than MRI or CT scanning</li>
            <li><strong>Portable:</strong> Many 3D ultrasound systems are compact and can be used in various clinical settings</li>
          </ul>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Advanced Applications</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Volume Quantification:</strong> Accurate measurement of organ and lesion volumes</li>
            <li><strong>Treatment Planning:</strong> Aids in surgical planning and minimally invasive procedures</li>
            <li><strong>Research and Education:</strong> Valuable tool for medical education and research studies</li>
            <li><strong>Telemedicine:</strong> Volumes can be stored and transmitted for remote consultation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
