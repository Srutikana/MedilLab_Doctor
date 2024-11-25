import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // Adjust the import path
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AppointmentScreen from './components/Doctorappoinment';
import Profile from './components/Profile';  // Import the Profile component
import DoctorPrescriptionForm from './components/DoctorPrescriptionForm'; // Import the new component
import PatientProfile from './components/PatientProfile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          {/* Navbar will show appropriate links based on the login status */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Protected routes (Appointments and Profile) */}
            <Route path="/appointments" element={<AppointmentScreen />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/appointment" element={<AppointmentScreen />} />
            {/* Route for DoctorPrescriptionForm */}
            <Route path="/edit-prescription" element={<DoctorPrescriptionForm />} />
            <Route path="/patient-profile" element={<PatientProfile />} /> {/* Patient Profile page */}

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
