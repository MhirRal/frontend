import React, { useRef } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

function AdminComponent() {
 const textareaRef = useRef(null);

 const handleSendMessage = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    console.log('Message:', message);
    event.target.elements.message.value = '';
 };

 const handleChange = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height to auto
      const rows = textarea.rows > 4 ? 4 : textarea.rows; // Limit to 4 rows visually
      textarea.style.height = `${rows * textarea.scrollHeight / textarea.rows}px`; // Set height
    }
 };

 const handleKeyDown = (event) => {
    const textarea = textareaRef.current;
    if (textarea && event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      textarea.value += '\n'; // Add a new line
      handleChange(); // Adjust height after adding a new line
    }
 };

 return (
    <div className="admin-container">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <form onSubmit={handleSendMessage} className="message-box">
          <div className="message-input">
            <textarea
              ref={textareaRef}
              className="form-control"
              id="message"
              name="message"
              placeholder="Post announcement"
              rows={4} // Initially set to 4 rows
              style={{ resize: 'none' }} // Disable manual resizing
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button type="submit" className="send-btn btn btn-primary">
              <i className="bi bi-send"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
 );
}

export default AdminComponent;