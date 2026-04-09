import React, { useState } from 'react';
import '../styles/CV.css';

export default function Education() {
  const [edu, setEdu] = useState({
    school: '',
    study: '',
    date: '',
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdu((prevEdu) => ({ ...prevEdu, [name]: value }));
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
      <h2>Educational Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="cv-form">
          <input
            type="text"
            name="school"
            placeholder="School Name"
            value={edu.school}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="study"
            placeholder="Title of Study"
            value={edu.study}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="date"
            placeholder="Date of Study"
            value={edu.date}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div className="cv-display">
          <p><strong>School:</strong> {edu.school}</p>
          <p><strong>Study:</strong> {edu.study}</p>
          <p><strong>Date:</strong> {edu.date}</p>
          <button onClick={handleEdit} className="edit-btn">Edit</button>
        </div>
      )}
    </section>
  );
}