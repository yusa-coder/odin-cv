import React, { useState } from 'react';
import '../styles/CV.css';

export default function Experience() {
  const [exp, setExp] = useState({
    company: '',
    position: '',
    responsibilities: '',
    from: '',
    to: '',
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExp((prevExp) => ({ ...prevExp, [name]: value }));
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
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="cv-form">
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={exp.company}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position Title"
            value={exp.position}
            onChange={handleChange}
            required
          />
          <textarea
            name="responsibilities"
            placeholder="Main Responsibilities"
            value={exp.responsibilities}
            onChange={handleChange}
            rows="4"
            required
          />
          <div className="date-group">
            <input
              type="text"
              name="from"
              placeholder="From"
              value={exp.from}
              onChange={handleChange}
            />
            <input
              type="text"
              name="to"
              placeholder="To"
              value={exp.to}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div className="cv-display">
          <p><strong>Company:</strong> {exp.company}</p>
          <p><strong>Position:</strong> {exp.position}</p>
          <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
          <p><strong>Tenure:</strong> {exp.from} - {exp.to}</p>
          <button onClick={handleEdit} className="edit-btn">Edit</button>
        </div>
      )}
    </section>
  );
}