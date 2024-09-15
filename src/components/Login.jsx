// // src/components/Login.js
// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Login = () => {
//   const [password, setPassword] = useState('');
//   const { login} = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const isLoginSuccessful = login(password);
//     console.log(isLoginSuccessful)

//     if(isLoginSuccessful){
//       toast.success("Login Successfuly!")
//       navigate('/gallery/create');
//     }
//     else {
//       toast.error("Login failed. Please check your credentials.");
//     }
    
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleSubmit} className="bg-red-100 p-8 rounded shadow-md">
//         <h2 className="text-2xl mb-4">Login</h2>
//         <label className="block mb-4">
//           <span className="text-gray-700">Password:</span>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-yellow-100 "
//           />
//         </label>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Login
//         </button>
//         <ToastContainer
//         position="top-center"
//         autoClose={2500}
//         theme="dark"
//         />
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the intended path from the location state or default to "/"
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();

    const isLoginSuccessful = login(password);

    if (isLoginSuccessful) {
      toast.success("Login Successful!");
      // Redirect to the originally intended page
      navigate(from, { replace: true });
    } else {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-red-100 p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <label className="block mb-4">
          <span className="text-gray-700">Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-yellow-100 "
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          theme="dark"
        />
      </form>
    </div>
  );
};

export default Login;
