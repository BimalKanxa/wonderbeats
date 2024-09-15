import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import Contact from "./components/Contact";
import Navbar from './components/Navbar'
import Gallery from './components/Gallery';
import AddEventForm from './components/AddEventForm';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AddCollabImages from './components/AddCollabImages';


function App() {


  return (
    <>
      {/* <Home/> */}
      <AuthProvider>

        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
            path="/gallery/create"
            element={<ProtectedRoute element={<AddEventForm />} />}
          />
            {/* Protected route for AddCollab */}
            <Route
            path="/images/collab"
            element={<ProtectedRoute element={<AddCollabImages />} />}
          />
          </Routes>

        </Router>
      </AuthProvider>
    </>
  );
}

export default App
