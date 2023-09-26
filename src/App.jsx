import './App.css'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import Contact  from "./components/Contact";
import Navbar from './components/Navbar'
import Gallery from './components/Gallery';


function App() {
 

  return (
    <>
       {/* <Home/> */}
      <Router>
        <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        
      </Router>
      
  </>
  );
}

export default App
