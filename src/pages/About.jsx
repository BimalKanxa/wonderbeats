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
        <p className='about_para'>The Wonder Beats Foundation is a non-governmental organization committed to improving the lives of underprivileged students and unemployed youths. Founded on the principle of providing equal opportunities to all, the foundation focuses on creating sustainable programs that empower individuals to reach their full potential. <br /><br /> At the heart of the organization&apos;s mission is the belief that education is a key tool for breaking the cycle of poverty. The Wonder Beats Foundation works to provide access to quality education for disadvantaged students, regardless of their socioeconomic status. Through scholarships, mentorship, and educational programs, the foundation aims to create a level playing field for all students, irrespective of their background.</p>
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
        <img src="./equaloppor.png" alt="image" />
      </div>
      <div className="feature-desc flex" >
       
        <h3>Equal Opportunities</h3>
        <p className="para1">
        We believe in providing equal opportunities for all individuals, regardless of their background or circumstances. Our programs aim to level the playing field and ensure that everyone has a fair chance to succeed.</p>
      </div>


    </div>
  </section>
  <section className="big-feature-section">
    <div className="container flex big-feature-container second-feature" data-aos="fade-left">
      <div className="feature-img imgwidth">
        <img src="/empowerment.png" alt="image" />
      </div>
      <div className="feature-desc flex">
        
        <h3>Empowerment Through Education</h3>
        <p className="para1">Education is a powerful tool for empowerment. We strive to empower underprivileged students by providing scholarships and educational resources, enabling them to break free from the cycle of poverty and achieve their dreams. The Wonder Beats Foundation is dedicated to improving the lives of the most vulnerable members of our society. By empowering underprivileged students and unemployed youths, the foundation is making a positive impact on communities across the country, and helping to build a brighter, more equitable future for all.
</p>
      </div>


    </div>
  </section>
  <section className="big-feature-section custom-feature">
    <div className="container flex big-feature-container" data-aos="fade-right">
      <div className="feature-img imgwidth">
        <img src="https://imgs.search.brave.com/0ka8B76AC2wkaaw8ok8e_5oYCU92KR-1UG1w7D7HTVo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGhpcHBzbnkub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzExL1BISVBQUy1E/RVNJR04tRklOQUwt/UkdCLTEwMjR4OTk2/LmpwZw" alt="image" />
      </div>
      <div className="feature-desc flex">
      
        <h3>Building a Brighter Future</h3>
        <p className="para1">In addition to supporting education, The Wonder Beats Foundation also works to address the issue of unemployment among youths. The organization provides training and skill development programs that equip young people with the skills they need to succeed in today&apos;s competitive job market. By promoting entrepreneurship and self-reliance, the foundation is committed to reducing the unemployment rate and creating a better future for all..

</p>
      </div>


    </div>
  </section>
  <h2 className="features-header" style={{color: "#06a3da", borderBottom: "2px solid #06a3da", width: "100%",marginTop: "5%" }}></h2>
    <Contact/>
  <Footer/>
    </>
  );
};