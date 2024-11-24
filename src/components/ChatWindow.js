import React from "react";
import './ChatWindow.css';

const ChatWindow = ({ name, imageUrl, onClose }) => {
  const [messages, setMessages] = React.useState([]); // Store messages
  const [currentMessage, setCurrentMessage] = React.useState(""); // Store current input message

  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value); // Update current message while typing
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      // Add message to the chat
      setMessages([...messages, { text: currentMessage, sender: "user" }]);
      setCurrentMessage(""); // Clear the input after sending the message
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="header-left">
          <img src={imageUrl} alt={name} className="profile-pic" />
          <span>{name}</span>
        </div>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="chat-body">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={currentMessage}
          onChange={handleInputChange}
        />
        <button className="send-btn" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
