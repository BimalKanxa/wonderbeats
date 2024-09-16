import React from 'react'
import { FaHandsHelping, FaGlobe, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';


const ImpactArea = () => {
  return ( 
    <div className='m-[3%] p-[3%]'>
  
    <h2 className="text-3xl font-semibold mb-8 text-center">Our Impact Areas</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-[#f3f4f6] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <FaHandsHelping className="text-5xl text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Community Development</h3>
        <p>
        Empowering local communities through sustainable projects and skill development programs, we also focus on creating lasting impact by fostering self-reliance and economic growth</p>
      </div>
      <div className="bg-[#f3f4f6]  p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <FaGlobe className="text-5xl text-green-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Educational Facilities and Programs</h3>
        <p>Our mission is to provide quality education to young children in North East India through modern facilities, mentorship, and comprehensive support.</p>
      </div>
      <div className="bg-[#f3f4f6]  p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <FaBriefcase className="text-5xl text-red-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Collaborations and Partnerships</h3>
        <p>The WonderBeats Foundation partners with educational institutions and organizations in North East India to provide placement opportunities and organize job fairs for students. </p>
      </div>
    </div>

  </div>
  )
}

export default ImpactArea