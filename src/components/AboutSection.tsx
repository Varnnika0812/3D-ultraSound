import { motion } from 'motion/react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import profileImage from '../assets/profile.png';

export function AboutSection() {
  return (
    <div className="px-6 py-20 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500">
      <div className="max-w-[1400px] mx-auto">
        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.div 
              className="relative" 
              style={{ maxWidth: '500px', height: '500px' }}
              whileHover={{ 
                scale: 1.06, 
                rotate: 3,
                y: -10,
                transition: { duration: 0.5 }
              }}
            >
              <motion.img
                src={profileImage}
                alt="Varnika Maniraj"
                className="w-full h-full object-cover"
                whileHover={{ 
                  scale: 1.12,
                  filter: "brightness(1.05)"
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
          
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-white font-bold text-5xl">About Me</h2>
            <h3 className="text-white mb-6 font-bold text-3xl">I'm Varnika Maniraj</h3>
            <p className="text-white leading-relaxed italic mb-8">
              BIOMEDICAL ENGINEER
            </p>
            <p className="text-white leading-relaxed mb-8">
              With a background in Biomedical Engineering, 
              I am passionate about advancing medical technology through biomaterials, tissue engineering, and medical imaging.
            </p>
            
            <div className="space-y-4 mt-4">
              <div>
                <div className="text-white mb-1 font-black uppercase tracking-wider" style={{ letterSpacing: '0.1em' }}>EMAIL</div>
                <a 
                  href="mailto:varnikamaniraj@gmail.com"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  varnikamaniraj@gmail.com
                </a>
              </div>
              <div>
                <div className="text-white mb-1 font-black uppercase tracking-wider" style={{ letterSpacing: '0.1em' }}>PHONE</div>
                <div className="text-white">+91 7397428676</div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-4">
              <div className="text-white mb-4 font-black uppercase tracking-wider" style={{ letterSpacing: '0.1em' }}>CONNECT WITH ME</div>
              <div className="flex space-x-8">
                <motion.a
                  href="https://github.com/Varnnika0812"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-10 rounded-full transition-all duration-300">
                    <Github className="w-7 h-7 text-white group-hover:text-gray-200" />
                  </div>
                </motion.a>

                <motion.a
                  href="https://in.linkedin.com/in/varnika-maniraj-022699225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-10 rounded-full transition-all duration-300">
                    <Linkedin className="w-7 h-7 text-white group-hover:text-gray-200" />
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/_.varni_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-10 rounded-full transition-all duration-300">
                    <Instagram className="w-7 h-7 text-white group-hover:text-gray-200" />
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Internships & Skills Section */}
        <div className="border-t border-white border-opacity-30 pt-16 pb-8">
          <h3 className="text-white mb-8 font-bold text-3xl">INTERNSHIPS & SKILLS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white leading-relaxed text-justify mb-4">
                During my time as an intern at DRDO Industry Academia Centre of Excellence (DIA-CoE) Life Sciences Laboratory, 
                I gained valuable hands-on experience working on translational research projects aimed at improving patient care 
                and developing next-generation medical devices.
              </p>

              <p className="text-white leading-relaxed text-justify">
                Recognized as Best Student of the Year at KPRIET and awarded Second Runner-Up for Innovation at IIT Palakkad, 
                I thrive on merging engineering innovation with clinical needs. My multidisciplinary foundation allows me to 
                approach challenges with a solution-focused mindset, whether in research, development, or clinical applications.
              </p>
            </div>
            
            <div>
              <p className="text-white leading-relaxed text-justify">
                Strong analytical skills, a passion for collaborative problem-solving, and a commitment to impactful healthcare 
                innovation define my professional journey. I look forward to contributing to interdisciplinary teams and creating 
                technologies that transform patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
