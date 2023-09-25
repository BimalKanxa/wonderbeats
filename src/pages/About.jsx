import Footer from '../components/Footer';
import '../css/About.css'
import Contact from './Contact';

export const About = () => {
  return (
    <>
    
    <header>
    <div className="container header-section flex">
      <div className="header-left">
        <h1>About The Wonder Beats Foundation</h1>
        <p className='about_para'>The Wonder Beats Foundation is a non-profit organization committed to empowering individuals to break free from poverty&apos;s cycle and reach their full potential. Through scholarships, mentorship, and skill development programs, we strive to create a level playing field in education and employment.</p>
        <a href="#" className="primary-button get-started-btn">Contact Us</a>
      </div>
      <div className="header-right">
        <img src="https://imgs.search.brave.com/7ek16h5PYVhlNypnZV4RqtNKJl_YlJjPJZQveqSlKzQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTEx/NjY1NTk1L3Bob3Rv/L3dvcmstb2NjdXBh/dGlvbnMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVNTYlRQ/M2Q5YzFUTFNHTFVh/N0tZdUVwNDdmZHZI/cmx2OERFa3JoTDd5/UzA9" alt="banner image" />
      </div>
      
    </div>
  </header>
    
  

  <section className="big-feature-section">
    <h2 className="features-header" style={{color: "#06a3da", borderBottom: "2px solid #06a3da", width: "100%",marginTop: "5%" }}>Our Principles</h2>
    <div className="container flex big-feature-container">

      <div className="feature-img imgwidth">
        <img src="https://imgs.search.brave.com/BB0Gxj9OMJJwCuCiIu7LQak5p9_oXL4WVrNoTYEEc5g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI4/MjY2MTIxNC9waG90/by9lcXVhbC1vcHBv/cnR1bml0eS1tZW1v/LWFuZC1maWd1cmVz/LW9uLXRoZS1wYWdl/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Qm85X3JhUVVy/OWVFUmFUSllickpk/clVYLUZKcDBVWHpT/NjN5QS1tS2RwST0" alt="image" />
      </div>
      <div className="feature-desc flex">
       
        <h3>Equal Opportunities</h3>
        <p className="para1">
        We believe in providing equal opportunities for all individuals, regardless of their background or circumstances. Our programs aim to level the playing field and ensure that everyone has a fair chance to succeed.</p>
      </div>


    </div>
  </section>
  <section className="big-feature-section">
    <div className="container flex big-feature-container second-feature">
      <div className="feature-img imgwidth">
        <img src="https://imgs.search.brave.com/dmIIJKniibFDMR0dPJrj9jF3ijkqmwu5osjPAdeD9EY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tY2hl/bnJ5LmFjYWRlbWlj/d29ya3MuY29tL2lt/YWdlX3VwbG9hZHMv/VzFzaVppSXNJbWx0/WVdkbFgzVndiRzlo/WkhNdk15OHlZemcx/TW1abE9DMHhOMlpo/TFRRNE5HTXRZV1pr/WlMwNE1XWmxZV0U1/TURFMU5EZ3ZSVEpG/SUV4dloyOHVhbkJu/SWwxZD9zaGE9OTQz/YmY2N2E5MDlkMDAy/Yg" alt="image" />
      </div>
      <div className="feature-desc flex">
        
        <h3>Empowerment Through Education</h3>
        <p className="para1">Education is a powerful tool for empowerment. We strive to empower underprivileged students by providing scholarships and educational resources, enabling them to break free from the cycle of poverty and achieve their dreams.</p>
      </div>


    </div>
  </section>
  <section className="big-feature-section custom-feature">
    <div className="container flex big-feature-container">
      <div className="feature-img imgwidth">
        <img src="https://imgs.search.brave.com/0ka8B76AC2wkaaw8ok8e_5oYCU92KR-1UG1w7D7HTVo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGhpcHBzbnkub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzExL1BISVBQUy1E/RVNJR04tRklOQUwt/UkdCLTEwMjR4OTk2/LmpwZw" alt="image" />
      </div>
      <div className="feature-desc flex">
      
        <h3>Building a Brighter Future</h3>
        <p className="para1">We are committed to building a brighter and more equitable future for all members of society. Through mentorship and skill development programs, we equip unemployed youths with the necessary tools to secure meaningful employment and contribute to society.

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