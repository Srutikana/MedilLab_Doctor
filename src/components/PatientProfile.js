import React from "react";
import { useLocation } from "react-router-dom";
import './PatientProfile.css';

const PatientProfile = () => {
  const location = useLocation();
  const { appointment } = location.state; // Retrieve the passed appointment data

  return (
    <div className="profile-page">
      {/* Profile Section */}
      <div className="profile-card">
        <img src={appointment.imageUrl} alt="Profile" className="profile-img" />
        <div className="profile-info">
          <h2>{appointment.name}</h2>
          <p>{appointment.email}</p>
          <p>Appointments: 5 (Past), 2 (Upcoming)</p>
          <button className="message-btn">Send Message</button>
        </div>
      </div>

      {/* Notes Section */}
      <div className="notes-section">
        <h3>Notes</h3>
        <div className="note">
          <p>This patient needs to get full amount of tests.</p>
          <small>Dr. Gabriel Garcia Martinez | 20 Nov '24</small>
          <button className="save-note">Save note</button>
        </div>
      </div>

      {/* Files Section */}
      <div className="files-section">
        <h3>Files / Documents</h3>
        <div className="file">
          <p>Blood tests.pdf</p>
          <span>27 kb</span>
        </div>
        <div className="file">
          <p>Medical prescriptions.pdf</p>
          <span>9 kb</span>
        </div>
        <div className="file">
          <p>X-Ray results.pdf</p>
          <span>27 kb</span>
        </div>
        <button className="add-file">Add Files</button>
      </div>

      {/* Appointments Section */}
      <div className="appointments-section">
        <h3>Appointments</h3>
        <div className="appointment">
          <p>01 Oct '24 - Consultation with Dr. Arkady Ch. - 09:00 AM</p>
        </div>
        <div className="appointment">
          <p>04 Nov '24 - Treatment Procedure with Dr. Arkady Ch. - 09:00 AM</p>
        </div>
        <button className="add-appointment">Add Appointment</button>
      </div>

      {/* Payments Section */}
      <div className="payments-section">
        <h3>Payments</h3>
        <div className="payment">
          <p>Consultation with doctor - $20</p>
        </div>
        <div className="payment">
          <p>Medicine - $50</p>
        </div>
        <div className="payment">
          <p>Consultation with doctor - $20</p>
        </div>
        <div className="total">
          <p>Total amount: $90</p>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
