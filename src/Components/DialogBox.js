import React from 'react';
import { FiX } from 'react-icons/fi';

function DialogBox({ onClose }) {
  return (
    <div className="dialog-box">
      <button className="close-button" onClick={onClose}>
        <FiX />
      </button>
      <h2>Registration Form</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default DialogBox;