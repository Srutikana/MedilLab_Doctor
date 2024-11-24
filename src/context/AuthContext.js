// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Function to handle login
//   const login = () => {
//     setIsLoggedIn(true);
//   };

//   // Function to handle signup (also logs the user in after signup)
//   const signup = () => {
//     // Signup logic here (you can add real API integration or validation)
//     setIsLoggedIn(true);
//   };

//   // Function to handle logout
//   const logout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null); // New state to store user profile data

  // Function to handle login (you can add validation or API calls here)
  const login = (profileData) => {
    setIsLoggedIn(true);
    setUserProfile(profileData); // Set user profile upon login
  };

  // Function to handle signup (you can add validation or API calls here)
  const signup = (profileData) => {
    setIsLoggedIn(true);
    setUserProfile(profileData); // Set user profile upon signup
  };

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
    setUserProfile(null); // Clear profile upon logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userProfile, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
