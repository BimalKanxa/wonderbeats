import '../css/Imageslider.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';


const ImageSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // const cardStyle = {
  //   marginTop: '6%',
  //   width: '70%', // Set the desired width of the card
  //   margin: '0 auto', // Center the card horizontally
   
  // };

  const imageStyle = {
    maxHeight: '300px', // Set the maximum height for the images
    width: '100%', // Ensure the image resizes within the card
  };

  const [inView, setInView] = useState(false);

  // Use React Spring to animate the appearance of the component
  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100px)',
    config:{
      duration:1000,
    }
  });

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
  

  return (
    <Container style={{width: "100%"}}>
      <animated.div id="imageSlider" style={{...slideIn}}>
      <Slider {...sliderSettings}>
        <div className='sliderContainer'>
          <Card className='card'  >
            <Card.Img className='cardImage' style={imageStyle} src="https://images.unsplash.com/photo-1554224155-380177dc24a5?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxvcHBvcnR1bml0aWVzJTJDJTIwZW1wb3dlcnxlbnwwfHx8fDE2OTA1NjI0MTl8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=370" alt="Image 1" />
            <Card.Body>
            {/* className='cardTitle'  removed from below card.text*/} 
              <Card.Title>Empowering Lives Through Education and Employment</Card.Title>
              <Card.Text className='cardText'>
                Discover how The Wonder Beats Foundation is making a difference in the lives of underprivileged students and unemployed youths. Through scholarships, mentorship, and skill development programs, we empower individuals to break free from poverty&apos;s cycle and reach their full potential.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
        {/* //style={cardStyle} */}
          <Card >  
            <Card.Img style={imageStyle} src="https://images.unsplash.com/photo-1648912795679-a4d06075c860?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxvcHBvcnR1bml0aWVzJTJDJTIwcHJvZ3JhbXN8ZW58MHx8fHwxNjkwNTYyNDE5fDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=370" alt="Image 2" />
            <Card.Body>
              <Card.Title>Our Programs</Card.Title>
              <Card.Text>
              Discover our wide range of programs designed to provide underprivileged students and unemployed youths with the necessary tools and opportunities to succeed. From scholarships to mentorship and skill development programs, we are committed to breaking the cycle of poverty and creating a brighter future for all.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card >
            <Card.Img style={imageStyle} src="https://images.unsplash.com/photo-1494386346843-e12284507169?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxvcHBvcnR1bml0aWVzfGVufDB8fHx8MTY5MDU2MjQxOXww&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=370" alt="Image 3" />
            <Card.Body>
              <Card.Title>Join Our Community</Card.Title>
              <Card.Text>
              Become a part of our community and contribute to the mission of creating equal opportunities for all. Whether you want to volunteer, donate, or collaborate, your support can make a real difference in the lives of underprivileged students and unemployed youths. Together, we can build a more equitable and inclusive society.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* Add more slides as needed */}
      </Slider>
      </animated.div>
    </Container>
  );
};

export default ImageSlider;
