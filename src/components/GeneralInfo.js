import React, { useState } from 'react';
import '../styles/CV.css';

export default function GeneralInfo() {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <section className="cv-section">
      <h2>General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="cv-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={info.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={info.phone}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div className="cv-display">
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
          <button onClick={handleEdit} className="edit-btn">Edit</button>
        </div>
      )}
    </section>
  );
}