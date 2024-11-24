import React from "react";
import { useNavigate } from "react-router-dom";
import ChatWindow from "./ChatWindow"; // Import the ChatWindow component

const AppointmentScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredAppointments, setFilteredAppointments] = React.useState([]);
  const [selectedDay, setSelectedDay] = React.useState(1); // Default to the first day
  const [chatWindowOpen, setChatWindowOpen] = React.useState(false); // State for chat window visibility
  const [selectedAppointment, setSelectedAppointment] = React.useState(null); // Store selected appointment
  const navigate = useNavigate(); // Initialize useNavigate

  const appointments = [
    { name: "Emily James", age: "26 Years : Female", time: "8:15 PM", imageUrl: "/assets/emily.jpg", day: 1 },
    { name: "John Robinson", age: "24 Years : Male", time: "8:30 PM", imageUrl: "/assets/jhon.jpg", day: 1 },
    { name: "Sarah Wilson", age: "30 Years : Female", time: "9:00 PM", imageUrl: "/assets/sarah.jpg", day: 2 },
    { name: "Tom Brown", age: "28 Years : Male", time: "9:30 PM", imageUrl: "/assets/tom.jpg", day: 3 },
    { name: "Linda Smith", age: "32 Years : Female", time: "10:00 AM", imageUrl: "/assets/linda.jpg", day: 3 },
    // Additional appointments...
  ];

  // Weekday names in cyclic order
  const weekdayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  // Generate 30 days with corresponding weekday names
  const days = Array.from({ length: 30 }, (_, index) => {
    const dayNumber = index + 1;
    const weekday = weekdayNames[(dayNumber - 1) % 7];
    return { dayNumber, weekday };
  });

  React.useEffect(() => {
    // Filter appointments by the selected day and search query
    const query = searchQuery.toLowerCase();
    const filtered = appointments.filter(
      (appointment) =>
        appointment.day === selectedDay &&
        appointment.name.toLowerCase().includes(query)
    );
    setFilteredAppointments(filtered);
  }, [searchQuery, selectedDay]);

  const handleSmsClick = (appointment) => {
    setSelectedAppointment(appointment); // Set the selected appointment
    setChatWindowOpen(true); // Open the chat window
    
  };
  const handleViewDetails = (appointment) => {
    // Navigate to the patient profile page and pass the selected appointment's data
    navigate("/patient-profile", { state: { appointment } });
  };

  const closeChatWindow = () => {
    setChatWindowOpen(false); // Close the chat window
    setSelectedAppointment(null); // Reset selected appointment
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <header style={{ backgroundColor: "#01926b", padding: "10px", color: "white" }}>
        <h1>Appointments</h1>
      </header>

      <div style={{ padding: "16px" }}>
        <div style={{ display: "flex", overflowX: "scroll", marginBottom: "20px" }}>
          {days.map(({ dayNumber, weekday }) => {
            const isSpecialDate = dayNumber === selectedDay; // Highlight the selected day
            return (
              <div
                key={dayNumber}
                onClick={() => setSelectedDay(dayNumber)}
                style={{
                  width: "60px",
                  padding: "10px",
                  textAlign: "center",
                  borderRadius: "8px",
                  backgroundColor: isSpecialDate ? "#01926b" : "transparent",
                  color: isSpecialDate ? "white" : "black",
                  border: "1px solid #ddd",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                <div>{weekday}</div>
                <div>{dayNumber}</div>
              </div>
            );
          })}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h2>{filteredAppointments.length} Appointments</h2>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />
        </div>

        {filteredAppointments.map((appointment, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              padding: "16px",
              borderRadius: "8px",
              backgroundColor: "white",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              marginBottom: "10px",
            }}
          >
            <img
              src={appointment.imageUrl}
              alt={appointment.name}
              style={{
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                marginRight: "16px",
              }}
            />
            <div style={{ flexGrow: 1 }}>
              <h4 style={{ margin: 0 }}>
                {appointment.name}{" "}
                <span style={{ fontWeight: "normal", padding: "20px" }}>
                  {appointment.time}
                </span>
              </h4>
              <p style={{ margin: "4px 0" }}>{appointment.age}</p>
            </div>
            <div style={{ textAlign: "right", display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                style={{
                  padding: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#01926b",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => handleViewDetails(appointment)}
              >
                <i className="fas fa-eye" style={{ fontSize: "20px", color: "white" }}></i>
              </button>
              <button
                style={{
                  padding: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#01926b",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() =>
                  navigate("/edit-prescription", { state: { appointment } })
                }
              >
                <i className="fas fa-edit" style={{ fontSize: "20px", color: "white" }}></i>
              </button>
              <button
                style={{
                  padding: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#01926b",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => handleSmsClick(appointment)} // Open chat window
              >
                <i className="fas fa-sms" style={{ fontSize: "20px", color: "white" }}></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {chatWindowOpen && selectedAppointment && (
        <ChatWindow
          name={selectedAppointment.name} // Pass name prop
          imageUrl={selectedAppointment.imageUrl} // Pass imageUrl prop
          onClose={closeChatWindow} // Close chat window callback
        />
      )}
    </div>
  );
};

export default AppointmentScreen;
