import Hero from '../components/Hero'
import ImageSlider from '../components/ImageSlider'
import '../css/Home.css'
import CtaSection from '../components/CtaSection'
import Contact from './Contact'
import Footer from '../components/Footer'
import Collaboration from '../components/Collaboration'
import { useState, useEffect } from 'react';
import Loader from '../components/Loader'
import ImpactArea from '../components/ImpactArea'

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user has visited the home page before
    const hasVisitedBefore = localStorage.getItem('hasVisitedHome');

    if (hasVisitedBefore) {
      // If visited before, set loading to false immediately
      setLoading(false);
    } else {
      // If first visit, set loading to true for 1000 milliseconds and mark as visited
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasVisitedHome', 'true');
      }, 1000);
    }
  }, []);

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <Hero />
          <ImpactArea/>
          <ImageSlider />
          <Collaboration />
          <CtaSection />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
