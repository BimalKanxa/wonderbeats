
import { useRef } from 'react'
import '../css/Hero.css'
import {motion, useInView, useAnimation} from 'framer-motion'

const Hero = () => {
  const ref = useRef(null)
  const isInview = useInView(ref, {once: true})

  return (
    <>
    <div ref = {ref} style={{
      position: "relative",
      overflow:"hidden"
    }}>


    <motion.div
      variants={{
        hidden: {opacity:0, y : 75},
        visible: {opacity: 1, y:0},
      }}
      initial="hidden"
      animated="visible"
      transition={{duration: 0.5, delay:0.25}}
    >
         <header>
    <div className="container1 header-section1 flex1">
      <div className="header-left1">
        <h1>Empowering Lives Through Education and Opportunity.</h1>
        <h4>Breaking Barriers, Building Futures</h4><br />
        <p className='hero-para'>The Wonder Beats Foundation is a non-profit organization committed to empowering individuals to break free from poverty&apos;s cycle and reach their full potential. Through scholarships, mentorship, and skill development programs, we strive to create a level playing field in education and employment.</p>
        <a href="/about" className="primary-button1 get-started-btn1">Learn More!</a>
      </div>
      <div className="header-right1">
        <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1018&h=584" alt="banner image" />
      </div>
    </div>
  </header>

    </motion.div>
    </div>
    </>
  )
}

export default Hero