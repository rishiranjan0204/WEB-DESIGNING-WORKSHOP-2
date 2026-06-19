import React from 'react';
import './Student.css';

const Student = ({ name, course, marks }) => {
  return (
    <div className="student-card">
      <div className="student-header">
        <h2 className="student-name">{name}</h2>
      </div>
      <div className="student-body">
        <div className="student-info">
          <label>Course:</label>
          <p>{course}</p>
        </div>
        <div className="student-info">
          <label>Marks:</label>
          <p className="marks">{marks}</p>
        </div>
      </div>
    </div>
  );
};

export default Student;
