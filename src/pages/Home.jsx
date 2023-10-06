import Hero from '../components/Hero'
import ImageSlider from '../components/ImageSlider'
import '../css/Home.css'
import CtaSection from '../components/CtaSection'
import Contact from './Contact'
import Footer from '../components/Footer'
import Collaboration from '../components/Collaboration'
import { useState, useEffect } from 'react';
import Loader from '../components/Loader'





const Home = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{ 
    setTimeout(() =>{
      setLoading(false);
    },2000)
  },[])

  return (
    <>
    { loading ? ( <Loader /> ) : (
      <>
 <Hero/>
 <ImageSlider/>
 <Collaboration/>
<CtaSection/>
    <Contact/>
<Footer/>
</>
    )
}



    {/* <Footer/> */}
    </>
  )
}

export default Home