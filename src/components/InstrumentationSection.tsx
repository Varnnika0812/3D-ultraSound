import { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';
import equipmentImage1 from 'figma:asset/356df669dcf5c04d45622f87ee64dd2d97850c6a.png';
import equipmentImage2 from 'figma:asset/aecc6ded0578da24a2ef24de499c099526afd2d0.png';

const marketData = [
  { year: '2018', value: 2.1 },
  { year: '2019', value: 2.4 },
  { year: '2020', value: 2.7 },
  { year: '2021', value: 3.2 },
  { year: '2022', value: 3.8 },
  { year: '2023', value: 4.5 },
  { year: '2024', value: 5.2 }
];

const usageData = [
  { category: 'Obstetrics', percentage: 45, color: '#ec4899' },
  { category: 'Cardiology', percentage: 25, color: '#8b5cf6' },
  { category: 'Oncology', percentage: 15, color: '#06b6d4' },
  { category: 'Urology', percentage: 10, color: '#10b981' },
  { category: 'Others', percentage: 5, color: '#f59e0b' }
];

const AnimatedBar = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.rect
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ height: 0, y: props.y + props.height }}
      animate={{ 
        height: props.height, 
        y: props.y,
        opacity: isHovered ? 0.8 : 1,
        scale: isHovered ? 1.05 : 1
      }}
      transition={{ 
        duration: 0.8, 
        delay: props.index * 0.1,
        type: "spring",
        stiffness: 100
      }}
    />
  );
};

export function InstrumentationSection() {
  const [hoveredLine, setHoveredLine] = useState(false);

  return (
    <div className="px-6 py-20 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="mb-12 text-white font-bold text-5xl">Instrumentation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -80, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1
            }}
            whileHover={{ 
              scale: 1.05,
              rotateZ: -2,
              y: -10,
              boxShadow: "0 35px 70px -15px rgba(0, 0, 0, 0.6)",
              transition: { duration: 0.4 }
            }}
          >
            <motion.img
              src={equipmentImage1}
              alt="Modern 3D Ultrasound Equipment"
              className="w-full h-full object-cover"
              whileHover={{ 
                scale: 1.08,
                filter: "brightness(1.05) contrast(1.1)"
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 80, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2
            }}
            whileHover={{ 
              scale: 1.05,
              rotateZ: 2,
              y: -10,
              boxShadow: "0 35px 70px -15px rgba(0, 0, 0, 0.6)",
              transition: { duration: 0.4 }
            }}
          >
            <motion.img
              src={equipmentImage2}
              alt="Advanced Ultrasound System"
              className="w-full h-full object-cover"
              whileHover={{ 
                scale: 1.08,
                filter: "brightness(1.05) contrast(1.1)"
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-white mb-6 text-center font-bold text-2xl">
              3D Ultrasound Market Growth (Billion USD)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart 
                data={marketData}
                onMouseEnter={() => setHoveredLine(true)}
                onMouseLeave={() => setHoveredLine(false)}
              >
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="year" 
                  stroke="#666"
                  tick={{ fill: '#666' }}
                />
                <YAxis 
                  stroke="#666"
                  tick={{ fill: '#666' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.95)', 
                    border: '2px solid #8b5cf6',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="circle"
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8b5cf6" 
                  strokeWidth={3} 
                  name="Market Size"
                  fill="url(#colorGradient)"
                  dot={{ 
                    fill: '#8b5cf6', 
                    strokeWidth: 2, 
                    r: 5,
                    stroke: '#fff'
                  }}
                  activeDot={{ 
                    r: 8,
                    stroke: '#8b5cf6',
                    strokeWidth: 2,
                    fill: '#fff'
                  }}
                  animationDuration={1500}
                  animationBegin={200}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-white mb-6 text-center font-bold text-2xl">
              Clinical Application Distribution (%)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usageData}>
                <defs>
                  {usageData.map((entry, index) => (
                    <linearGradient key={`gradient-${index}`} id={`barGradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={entry.color} stopOpacity={0.9}/>
                      <stop offset="95%" stopColor={entry.color} stopOpacity={0.6}/>
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="category" 
                  stroke="#666"
                  tick={{ fill: '#666', fontSize: 12 }}
                  angle={-15}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  stroke="#666"
                  tick={{ fill: '#666' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.95)', 
                    border: '2px solid #06b6d4',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  cursor={{ fill: 'rgba(6, 182, 212, 0.1)' }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="circle"
                />
                <Bar 
                  dataKey="percentage" 
                  name="Usage %"
                  radius={[8, 8, 0, 0]}
                  animationDuration={1000}
                  animationBegin={300}
                >
                  {usageData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={`url(#barGradient-${index})`}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-white space-y-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            Modern 3D ultrasound systems consist of several sophisticated components working in harmony to produce 
            high-quality three-dimensional images. Understanding these components is essential for appreciating the 
            technology's capabilities and limitations.
          </p>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Transducers</h3>
          <p>
            The transducer is the heart of any ultrasound system. For 3D imaging, specialized transducers include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>2D Array Transducers:</strong> Contain thousands of piezoelectric elements arranged in a matrix, 
            enabling electronic beam steering in three dimensions without mechanical movement</li>
            <li><strong>Mechanical 3D Transducers:</strong> Utilize a motor to sweep a conventional 1D array transducer 
            across the volume of interest</li>
            <li><strong>Freehand 3D Systems:</strong> Employ position sensors to track the movement of a standard 2D 
            transducer during manual scanning</li>
          </ul>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Processing Unit</h3>
          <p>
            The processing unit is responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Beamforming: Focusing and steering the ultrasound beam</li>
            <li>Signal processing: Amplifying, filtering, and digitizing received echoes</li>
            <li>Image reconstruction: Converting raw data into 3D volumes</li>
            <li>Real-time rendering: Generating displayable images at high frame rates</li>
          </ul>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Display and User Interface</h3>
          <p>
            Modern systems feature high-resolution displays with intuitive touchscreen interfaces that allow operators to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Adjust imaging parameters in real-time</li>
            <li>Manipulate 3D volumes (rotate, zoom, slice)</li>
            <li>Perform measurements and calculations</li>
            <li>Apply various rendering modes and visualization techniques</li>
          </ul>
          
          <h3 className="text-white mt-6 mb-3 font-bold text-3xl">Storage and Connectivity</h3>
          <p>
            Contemporary 3D ultrasound systems include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Large-capacity storage for volumetric data</li>
            <li>DICOM compatibility for integration with hospital information systems</li>
            <li>Network connectivity for remote consultation and telemedicine</li>
            <li>Cloud storage options for long-term archiving and data sharing</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
