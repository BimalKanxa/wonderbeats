import { useSpring} from 'react-spring';
import { useState, useEffect } from 'react';


export function useSlideInAnimation(inView) {
  const [inView, setInView] = useState(false);
    // Function to check if the component is in view
    const checkInView = () => {
      const element = document.getElementById('imageSlider'); // Replace 'imageSlider' with the actual ID or class of your target element
      if (!element) return;
  
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
      setInView(rect.top <= windowHeight);
    };
  
    // Use useEffect to listen for scroll events and check if the component is in view
    useEffect(() => {
      window.addEventListener('scroll', checkInView);
      checkInView(); // Check initially when the component mounts
      return () => {
        window.removeEventListener('scroll', checkInView);
      };
    }, []);
  // Define the animation logic
  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100px)',
    config: {
      duration: 1000,
    }
  });

  return slideIn;
}