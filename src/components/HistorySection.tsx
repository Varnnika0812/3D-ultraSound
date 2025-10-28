import { motion } from 'motion/react';
import historyImage from 'figma:asset/5107c7baeabff33f21b4074710a989cef64b8eb1.png';

export function HistorySection() {
  return (
    <div className="px-6 py-20 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="mb-12 text-white font-bold text-5xl">History</h2>
        
        <motion.div 
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          whileHover={{ 
            scale: 1.03,
            rotateX: 3,
            y: -8,
            boxShadow: "0 35px 70px -15px rgba(0, 0, 0, 0.6)",
            transition: { duration: 0.4 }
          }}
        >
          <motion.img
            src={historyImage}
            alt="Medical ultrasound history"
            className="w-full h-auto object-cover"
            whileHover={{ 
              scale: 1.06,
              filter: "brightness(1.05)"
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        
        <div className="text-white space-y-6 leading-relaxed">
          <p>
            The journey of 3D ultrasound imaging began in the 1980s when researchers first explored the possibility 
            of creating three-dimensional representations from ultrasound data. Early attempts were limited by 
            computational power and required manual reconstruction of images, making the process time-consuming 
            and impractical for routine clinical use.
          </p>
          <p>
            In the 1990s, significant technological breakthroughs occurred with the development of faster processors 
            and more sophisticated image reconstruction algorithms. The first commercial 3D ultrasound systems became 
            available, primarily used in obstetrics for fetal imaging. These systems could generate 3D surface renderings 
            that provided expectant parents with remarkable views of their unborn children.
          </p>
          <p>
            The 2000s marked a period of rapid advancement, with the introduction of 4D ultrasound (3D imaging in 
            real-time) and improvements in image quality and processing speed. Modern systems can now produce high-resolution 
            3D images in seconds, with advanced features like automated measurements, volume calculations, and sophisticated 
            rendering techniques.
          </p>
          <p>
            Today, 3D ultrasound technology continues to evolve, incorporating artificial intelligence and machine learning 
            to enhance image quality, automate diagnostic processes, and expand applications across various medical specialties. 
            The technology has become an indispensable tool in modern healthcare, offering safer, non-invasive diagnostic 
            capabilities with continuously improving accuracy and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}
