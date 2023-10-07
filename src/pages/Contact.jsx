// import Footer from '../components/Footer';
import '../css/Contact.css'

const Contact = () => {
  return (
    <>
    <div className="form-container" data-aos="fade-up" data-aos-duration="800">
  <h2 className="reg-head">Get in Touch!</h2>

  <form action="https://formspree.io/f/xnqkgkro" method="POST" >
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="phone">Phone Number:</label>
      <input type="number" id="phone" name="phone" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows="4"></textarea>


      <input type="submit" value="Send" style={{fontSize: "1.4rem",
      width: "100%",
      marginTop: "1.5%",
      padding: "13px",
      fontWeight: 400,
      background: "#15A0D7",
      color: "white",
      border: "none",
      borderRadius: "10px"}} />


  </form>
  
  <p style={{color: "red" }}id="warning"></p>
</div>
<h2 style={{color: "#06a3da", width: "100%",marginTop: "5%" }}></h2>

</>
  );
}

export default Contact