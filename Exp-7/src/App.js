import React from 'react';
import Student from './Student';
import './App.css';

const App = () => {
  // Array of student data
  const students = [
    {
      id: 1,
      name: 'Rahul Sharma',
      course: 'Computer Science',
      marks: 85
    },
    {
      id: 2,
      name: 'Anita Verma',
      course: 'Information Technology',
      marks: 92
    },
    {
      id: 3,
      name: 'Rohan Gupta',
      course: 'Electronics',
      marks: 78
    },
    {
      id: 4,
      name: 'Priya Singh',
      course: 'Computer Science',
      marks: 88
    },
    {
      id: 5,
      name: 'Arjun Kumar',
      course: 'Information Technology',
      marks: 95
    },
    {
      id: 6,
      name: 'Neha Patel',
      course: 'Electronics',
      marks: 82
    }
  ];

  return (
    <div className="app-container">
      <div className="header">
        <h1>Student Information System</h1>
        <p>React Components with JSX and Props</p>
      </div>
      
      <div className="students-container">
        {students.map((student) => (
          <Student
            key={student.id}
            name={student.name}
            course={student.course}
            marks={student.marks}
          />
        ))}
      </div>

      <div className="footer">
        <p>Experiment 7: Creating React Components using JSX and Props</p>
      </div>
    </div>
  );
};

export default App;
