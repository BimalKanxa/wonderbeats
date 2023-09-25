import Hero from '../components/Hero'
import ImageSlider from '../components/ImageSlider'
import '../css/Home.css'
import CtaSection from '../components/CtaSection'
import Contact from './Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
 <Hero/>
 <ImageSlider/>
<CtaSection/>
    <Contact/>
<Footer/>



    {/* <Footer/> */}
    </>
  )
}

export default Home