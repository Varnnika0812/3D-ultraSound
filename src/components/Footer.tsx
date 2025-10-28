import { motion } from 'motion/react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-start mb-16">
          {/* Social Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white mb-4 font-bold">Connect</h4>
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
          
          {/* Contact Info */}
          <div className="text-right">
            <div className="mb-8">
              <div className="text-white text-opacity-70 mb-2">Email</div>
              <a 
                href="mailto:varnikamaniraj@gmail.com"
                className="text-white hover:text-opacity-80 transition-all duration-300"
              >
                varnikamaniraj@gmail.com
              </a>
            </div>
            <div>
              <div className="text-white text-opacity-70 mb-2">Phone</div>
              <div className="text-white">+91 7397428676</div>
            </div>
          </div>
        </div>
        
        {/* QR Code Section */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.instagram.com/_.varni_/"
              alt="Instagram QR Code"
              className="w-32 h-32 mb-3 bg-white p-2 rounded"
            />
            <a 
              href="https://www.instagram.com/_.varni_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300"
            >
              Connect on Instagram
            </a>
          </div>
        </div>
        
        <div className="text-center text-white text-opacity-70">
          © 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
