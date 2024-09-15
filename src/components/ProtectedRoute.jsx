// // src/components/ProtectedRoute.jsx
// import React from 'react';
// import { Navigate} from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const ProtectedRoute = ({ element: Component, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? Component : <Navigate to="/login" />;
// };

// export default ProtectedRoute;

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // If not authenticated, redirect to login and save the attempted location
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return element;
};

export default ProtectedRoute;
