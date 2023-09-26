import '../css/ContactComponent.css'
import Footer from './Footer'
 

const Contact = () => {

  return (
    <>
    <div className='wrapper'>
        <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Delhi, India</div>
          {/* <div className="text-two">Gs Road Khanapara</div> */}
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+91 9774168925</div>
          <div className="text-two">+91 9362908260</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">thewonderbeatsfoundation@gmail.com</div>
          {/* <div className="text-two">codingloopz252@gmail.com</div> */}
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any type of queries, you can send message through email. </p>


      <form action="https://formspree.io/f/xnqkgkro" method="POST" id="myform">
        <div className="input-box">
          <input type="text" name='name'  placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" name='email'   placeholder="Enter your email" />
        </div>
        <div className="input-box">
          <input type="number"  name='phone' placeholder="Enter your Phone number" />
        </div>
        <div className="input-box message-box">
          <textarea name='message' id="5" cols="30" rows="10" placeholder="Message"></textarea>
        </div> 
        <div className="button">
          <a><input className="submitbutton"  type="submit" value="Send Now" /></a>
        </div>
      </form>
    </div>
    </div>
  </div>

    </div>
    <Footer/>
    </>
  )
}

export default Contact