import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // Adjust the import path
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';

import SignUp from './components/SignUp';
import AppointmentScreen from './components/Appoinment';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/appointments" element={<AppointmentScreen />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
