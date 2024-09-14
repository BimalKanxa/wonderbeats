import Footer from '../components/Footer';
import '../css/About.css'
import Contact from './Contact';
import headerImage from '../images/WBlogo.png'

export const About = () => {
  return (
    <>
    
    <header>
      <div className="header">
          <h1>About The Wonder Beats Foundation</h1>
      </div>
    <div className="containerAbout header-section flex">
      <div className="header-left">
        {/* <h1>About The Wonder Beats Foundation</h1> */}
        <p className='about_para'>The WonderBeats Foundation is dedicated to improving the lives of underprivileged students and unemployed youths, primarily in North East India. Established in 2022, the foundation operates as a registered NGO under the Indian Trust Registration Act 1882. The foundation’s mission is founded on the belief that education is a vital tool for breaking the cycle of poverty. <br /><br />
Our initiatives focus on creating sustainable programs that empower individuals to reach their full potential. We are committed to establishing educational facilities that provide modern and quality education to young children, ensuring equal opportunities for all, regardless of their background.
</p>
        <a href="#" className="primary-button get-started-btn">Contact Us</a>
      </div>
      <div className="header-right">
        <img src={headerImage} alt="banner image" />
      </div>
      
    </div>
  </header>
    
  

  <section className="big-feature-section">
    <h2 className="features-header" style={{color: "#06a3da", borderBottom: "2px solid #06a3da", width: "100%",marginTop: "5%" }}>Our Principles</h2>
    <div className="container flex big-feature-container" data-aos="fade-right">

      <div className="feature-img imgwidth" >
        <img src="/empowerment.png" alt="image" />
      </div>
      <div className="feature-desc flex" >
       
        <h3>Educational Facilities and Programs</h3>
        <p className="para1">
        At the core of our mission is the commitment to provide quality education to young children in North East India. We establish modern educational facilities equipped with the latest learning resources and technology. Our programs are designed to offer comprehensive educational support, including mentorship, after-school tutoring, and extracurricular activities. By creating an inclusive learning environment, we aim to ensure that every child, regardless of their socioeconomic status, has access to quality education and the opportunity to succeed.</p>
      </div>


    </div>
  </section>
  <section className="big-feature-section">
    <div className="container flex big-feature-container second-feature" data-aos="fade-left">
      <div className="feature-img imgwidth">
        <img src="/equaloppor.png" alt="image" />
      </div>
      <div className="feature-desc flex">
        
        <h3>Employment Opportunities and Training</h3>
        <p className="para1">In our effort to combat unemployment among youths, The WonderBeats Foundation provides various training programs and resources. We focus on equipping young people with the necessary skills to thrive in today’s competitive job market. Our training includes career counseling, and workshops on resume writing, interview skills, and professional development. By promoting entrepreneurship and self-reliance, we encourage young individuals to explore new career paths and create their own opportunities.
</p>
      </div>


    </div>
  </section>
  <section className="big-feature-section custom-feature">
    <div className="container flex big-feature-container" data-aos="fade-right">
      <div className="feature-img imgwidth">
        <img src="/aboutImage3.png" alt="image" />
      </div>
      <div className="feature-desc flex">
      
        <h3>Collaborations and Partnerships</h3>
        <p className="para1">The WonderBeats Foundation collaborates with numerous educational institutions, government and non-government organisations in North East India. These partnerships enable us to arrange placement opportunities for students with the help of two leading Placement partners from NE India, helping them transition from education to employment smoothly. We organize job fairs in collaboration with local colleges and universities, providing a platform for students to connect with potential employers. Additionally, our voluntary grooming sessions help students prepare for the professional world, enhancing their employability and confidence...

</p>
      </div>


    </div>
  </section>
  <h2 className="features-header" style={{color: "#06a3da", borderBottom: "2px solid #06a3da", width: "100%",marginTop: "5%" }}></h2>

  {/* //added new section after new data  */}

   {/* Adding the new sections */}
   <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Collaborations</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>
              <strong>Placement Partners:</strong> The Employment Express, Guwahati (Assam), Employment Provider.com, Dimapur (Nagaland)
            </li>
            <li>
              <strong>Colleges and Universities:</strong> Cotton University, Handique Girls' College, K C Das Commerce College, Pragjyotish College, Dimapur Government College, and more.
            </li>
            <li>
              <strong>Government Organisations:</strong> National Career Service Centre (NCS), Manipur; NCSDA, Meghalaya.
            </li>
            <li>
              <strong>International NGOs:</strong> Lions Club, Rotary Club.
            </li>
            <li>
              <strong>Youth Organisations:</strong> Assam, Nagaland, Manipur, and Meghalaya.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Community Impact</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The WonderBeats Foundation aims to create a brighter, more equitable future for all by addressing the educational and employment needs of the most vulnerable members of society. We strive to break the cycle of poverty and empower individuals to reach their full potential. Our efforts not only improve the lives of the underprivileged but also contribute to the overall development and progress of communities across North East India.
          </p>
        </div>
      </section>
      
      <h2 className="features-header" style={{color: "#06a3da", borderBottom: "2px solid #06a3da", width: "100%",marginTop: "5%" }}></h2>
  {/* //ends here  */}
    <Contact/>
  <Footer/>
    </>
  );
};