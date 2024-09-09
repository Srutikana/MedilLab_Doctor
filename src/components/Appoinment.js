import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredAppointments, setFilteredAppointments] = React.useState([]);

  const appointments = [
    {
      name: 'Emily James',
      age: '26 Years : Female',
      time: '8:15 PM',
      imageUrl: '/assets/emily.jpg',
    },
    {
      name: 'Jhon Robinson',
      age: '24 Years : Male',
      time: '8:30 PM',
      imageUrl: '/assets/jhon.jpg',
    },
  ];

  React.useEffect(() => {
    setFilteredAppointments(appointments);
  }, []);

  const filterAppointments = () => {
    const query = searchQuery.toLowerCase();
    const filtered = appointments.filter((appointment) =>
      appointment.name.toLowerCase().includes(query)
    );
    setFilteredAppointments(filtered);
  };

  React.useEffect(() => {
    filterAppointments();
  }, [searchQuery]);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <header style={{ backgroundColor: '#01926b', padding: '10px', color: 'white' }}>
        <h1>Appointments</h1>
      </header>

      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span>August 2024</span>
          <i className="fas fa-calendar-alt"></i>
        </div>

        <div style={{ display: 'flex', overflowX: 'scroll', marginBottom: '20px' }}>
          {[
            'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 
            'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE',
            'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE',
            'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE',
            'WED', 'THU','FRI'
          ].map((day, index) => {
            const isSpecialDate = index === 5; // Change index to make any specific date blue
            return (
              <div
                key={index}
                style={{
                  width: '60px',
                  padding: '10px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  backgroundColor: isSpecialDate ? '#01926b' : 'transparent',
                  color: isSpecialDate ? 'white' : 'black',
                  border: '1px solid #ddd',
                  marginRight: '10px',
                }}
              >
                <div>{day}</div>
                <div>{index + 1}</div>
              </div>
            );
          })}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>{filteredAppointments.length} Appointments</h2>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '10px', width: '100%', borderRadius: '8px', border: '1px solid #ddd' }}
          />
        </div>

        {filteredAppointments.map((appointment, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: 'white',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              marginBottom: '10px',
            }}
          >
            <img
              src={appointment.imageUrl}
              alt={appointment.name}
              style={{ borderRadius: '50%', width: '60px', height: '60px', marginRight: '16px' }}
            />
            <div style={{ flexGrow: 1 }}>
              <h4 style={{ margin: 0 }}>
                {appointment.name} <span style={{ fontWeight: 'normal', padding: '20px' }}>{appointment.time}</span>
              </h4>
              <p style={{ margin: '4px 0' }}>{appointment.age}</p>
            </div>
            <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                style={{
                  padding: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#01926b',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => alert('View Details!')}
              >
                <i className="fas fa-eye" style={{ fontSize: '20px', color: 'white' }}></i>
              </button>
              <button
                style={{
                  padding: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#01926b',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => alert('Edit Appointment!')}
              >
                <i className="fas fa-edit" style={{ fontSize: '20px', color: 'white' }}></i>
              </button>
              <button
                style={{
                  padding: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#01926b',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => alert('Call Now!')}
              >
                <i className="fas fa-phone" style={{ fontSize: '20px', color: 'white' }}></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentScreen;
