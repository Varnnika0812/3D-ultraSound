import { motion } from 'motion/react';

export function DisadvantagesSection() {
  return (
    <div className="px-6 py-20 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="mb-12 text-white font-bold text-5xl">Disadvantages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="bg-neutral-50 p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 60, scale: 0.85, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1 
            }}
            whileHover={{ 
              scale: 1.06, 
              rotate: 3,
              y: -12,
              boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.4)",
              transition: { duration: 0.4 }
            }}
          >
            <h3 className="text-purple-700 mb-6 text-center font-bold text-2xl">Technical Limitations</h3>
            <motion.div 
              className="rounded-xl overflow-hidden"
              whileHover={{ 
                scale: 1.07,
                rotate: -2
              }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif" 
                alt="Technical challenges animation"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-neutral-50 p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 60, scale: 0.85, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.06, 
              rotate: -3,
              y: -12,
              boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.4)",
              transition: { duration: 0.4 }
            }}
          >
            <h3 className="text-purple-700 mb-6 text-center font-bold text-2xl">Cost Considerations</h3>
            <motion.div 
              className="rounded-xl overflow-hidden"
              whileHover={{ 
                scale: 1.07,
                rotate: 2
              }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="https://media.giphy.com/media/67ThRZlYBvibtdF9JH/giphy.gif" 
                alt="Cost analysis animation"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
        
        <div className="text-white space-y-6 leading-relaxed">
          <p>
            While 3D ultrasound imaging offers significant advantages, it is important to understand its limitations 
            and challenges to set realistic expectations and ensure appropriate clinical application.
          </p>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Technical Limitations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Image Quality Dependence:</strong> 3D image quality is fundamentally limited by the quality 
            of underlying 2D images and can be degraded by patient factors such as obesity or excessive gas</li>
            <li><strong>Artifacts:</strong> Susceptible to various artifacts including shadowing, reverberation, and 
            motion artifacts that can compromise image interpretation</li>
            <li><strong>Limited Penetration:</strong> Ultrasound waves have limited depth penetration, making it 
            difficult to image deep structures in larger patients</li>
            <li><strong>Operator Dependence:</strong> Requires skilled operators for optimal image acquisition and 
            interpretation</li>
          </ul>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Practical Challenges</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Time-Consuming Post-Processing:</strong> Reconstruction and analysis of 3D volumes can be 
            time-intensive, particularly for complex cases</li>
            <li><strong>Large Data Files:</strong> 3D volumes generate large files that require significant storage 
            capacity and processing power</li>
            <li><strong>Learning Curve:</strong> Clinicians need additional training to effectively use 3D ultrasound 
            and interpret volumetric data</li>
            <li><strong>Patient Cooperation:</strong> Requires patient to remain still during volume acquisition, 
            which can be challenging with pediatric or uncooperative patients</li>
          </ul>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Cost Considerations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Equipment Cost:</strong> 3D ultrasound systems are more expensive than conventional 2D systems</li>
            <li><strong>Maintenance:</strong> Requires regular calibration and maintenance of sophisticated components</li>
            <li><strong>Infrastructure:</strong> Needs robust IT infrastructure for data storage and processing</li>
            <li><strong>Training Expenses:</strong> Additional costs for staff training and continuing education</li>
          </ul>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Clinical Limitations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Not Always Necessary:</strong> Many clinical questions can be adequately answered with 
            conventional 2D ultrasound</li>
            <li><strong>Complementary Rather Than Replacement:</strong> Should be used as an adjunct to, not a 
            replacement for, standard 2D imaging</li>
            <li><strong>Limited Soft Tissue Contrast:</strong> Cannot match the soft tissue contrast resolution 
            of MRI for certain applications</li>
            <li><strong>Bone and Air Barriers:</strong> Cannot effectively image through bone or air-filled structures</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
