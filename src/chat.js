// src/components/Chat.js
import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [name, setName] = useState('');
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isNameEntered && !isChatOpen) {
      setIsNameEntered(true);
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages([...messages, `Hi ${name}, welcome to Unlimited`]);
      }, 1000); // Simulate typing delay
    }
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsNameEntered(true);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages([...messages, `Hi ${name}, welcome to Unlimited`]);
    }, 1000); // Simulate typing delay
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages([...messages, input, 'Unlimited will get back to you as soon as possible. Due to the high number of users, this will take a few minutes.']);
    }, 1000); // Simulate typing delay
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="chat-container">
      <div className={`chat-icon ${isChatOpen ? 'open' : ''}`} onClick={toggleChat}>
        <i className="fas fa-comments"></i>
      </div>
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Chat with us</span>
            <button className="close-btn" onClick={handleCloseChat}>x</button>
          </div>
          <div className="chat-body">
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className="message">{message}</div>
              ))}
              {typing && <div className="message typing">Developer is typing...</div>}
            </div>
            {isNameEntered ? (
              <form onSubmit={handleMessageSubmit}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                />
                <button type="submit">Send</button>
              </form>
            ) : (
              <form onSubmit={handleNameSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name..."
                />
                <button type="submit">Start Chat</button>
              </form>
            )}
          </div>
        </div>
      )}
      {isChatOpen && (
        <div className="close-icon" onClick={handleCloseChat}>
          <i className="fas fa-times"></i>
        </div>
      )}
    </div>
  );
};

export default Chat;
