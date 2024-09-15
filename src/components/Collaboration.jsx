// import '../css/Collaboration.css'
// import { useState, useEffect } from 'react';
// import { useSpring, animated } from 'react-spring';


// const Collaboration = () => {

//     const [inView, setInView] = useState(false);

//     // Use React Spring to animate the appearance of the component
//     const slideIn = useSpring({
//       opacity: inView ? 1 : 0,
//       transform: inView ? 'translateX(0)' : 'translateX(100px)',
//       config:{
//         duration:1000,
//       }
//     });
  
//       // Function to check if the component is in view
//       const checkInView = () => {
//         const element = document.getElementById('imageSlider1'); // Replace 'imageSlider' with the actual ID or class of your target element
//         if (!element) return;
    
//         const rect = element.getBoundingClientRect();
//         const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
//         setInView(rect.top <= windowHeight);
//       };
    
//       // Use useEffect to listen for scroll events and check if the component is in view
//       useEffect(() => {
//         window.addEventListener('scroll', checkInView);
//         checkInView(); // Check initially when the component mounts
//         return () => {
//           window.removeEventListener('scroll', checkInView);
//         };
//       }, []);
      
//   return (
//     <>

//     <div className="client-wrap">
//     <animated.div id="imageSlider1" style={{...slideIn}}>
//         <h1>Our Collaboration</h1>
//         <hr />
//         <div className="client-in">
//             <ul>
               
                
//                 <li>
//                     <img src="/logo.png" alt="colab" />
//                 </li>
//                     <li>
//                     <img src="./ncscmeghalaya.png" alt="colab" />
//                 </li>
//                 <li>
//                     <img src="./kcdaslogo.png" alt="colab" />
//                 </li>
//                 <li>
//                     <img src="./ncscmanipur.png" alt="colab" />
//                 </li>

//                 <li>
//                     <img src="./employmentprovider.png" alt="colab" />
//                 </li>
//                 <li>
//                     <img src="./cottonlogo.png" alt="collaboration" />
//                 </li>
//                 <li>
//                     <img  src="/handiqueLogo.png" alt="colab" />
//                 </li>               

//             </ul>
//         </div>
//         </animated.div>
//     </div>


//     </>
//   )
// }

// export default Collaboration

import '../css/Collaboration.css';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import axios from 'axios'; // Import axios to make API requests
import { ToastContainer, toast } from 'react-toastify'; // Optional for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { SERVER_URL } from '../server';


const Collaboration = () => {
  const [inView, setInView] = useState(false);
  const [collabImages, setCollabImages] = useState([]); // State to hold collaboration images

  // Use React Spring to animate the appearance of the component
  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(100px)',
    config: {
      duration: 1000,
    },
  });

  // Function to check if the component is in view
  const checkInView = () => {
    const element = document.getElementById('imageSlider1'); 
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    setInView(rect.top <= windowHeight);
  };

  // Fetch collaboration images from the database on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/images/collab`);
        setCollabImages(response.data); // Set fetched images to state
        // toast.success('Images loaded successfully!');
      } catch (error) {
        console.error('Error fetching collaboration images:', error);
        // toast.error('Failed to load images.');
      }
    };

    fetchImages(); // Fetch images when component mounts

    window.addEventListener('scroll', checkInView);
    checkInView(); // Check initially when the component mounts
    return () => {
      window.removeEventListener('scroll', checkInView);
    };
  }, []);

  return (
    <>
      <div className="client-wrap">
        <animated.div id="imageSlider1" style={{ ...slideIn }}>
          <h1>Our Collaboration</h1>
          <hr />
          <div className="client-in">
            <ul>
              {collabImages.length > 0 ? (
                collabImages.map((image) => (
                  <li key={image._id}>
                    <img src={image.imgUrl} alt={`colab-${image._id}`} />
                  </li>
                ))
              ) : (
                <p>No collaboration images found.</p>
              )}
            </ul>
          </div>
        </animated.div>
      </div>

      <ToastContainer position="top-center" autoClose={2500} theme="dark" />
    </>
  );
};

export default Collaboration;

