# Experiment 7: Creating React Components using JSX and Props

## Overview
This is a React application demonstrating the use of functional components, JSX syntax, and props for building reusable UI components.

## Key Concepts Demonstrated

### 1. **React Components**
   - Functional components using arrow functions
   - Component reusability and modularity

### 2. **JSX Syntax**
   - Using HTML-like syntax in JavaScript
   - Embedding JavaScript expressions within JSX

### 3. **Props**
   - Passing data from parent to child components
   - Using props to customize component behavior

### 4. **Dynamic Content**
   - Rendering lists with `.map()`
   - Using unique `key` prop for list items

## Project Structure

```
Exp-7/
├── package.json          # Project dependencies and scripts
├── index.html           # HTML entry point
├── index.js             # React DOM render
├── App.js               # Main App component
├── App.css              # App styling
├── Student.js           # Student component (displays individual student)
├── Student.css          # Student component styling
└── .gitignore          # Git ignore file
```

## Components

### App Component
- Main component that holds student data
- Uses `.map()` to render multiple Student components
- Passes props: `name`, `course`, `marks`

### Student Component
- Functional component accepting props
- Displays student information in a card format
- Props: `name`, `course`, `marks`

## How to Run

### Method 1: Using Create React App

```bash
# Navigate to the directory
cd Exp-7

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open at `http://localhost:3000`

### Method 2: Using JSX directly in Browser (Alternative)

You can also use Babel to transpile JSX in the browser by using a CDN approach with the files provided.

## Expected Output

The application displays:
- A header with title "Student Information System"
- Multiple student cards arranged in a grid layout
- Each card shows:
  - Student Name
  - Course
  - Marks
- A footer with experiment description

## Student Data Example

```javascript
{
  name: 'Rahul Sharma',
  course: 'Computer Science',
  marks: 85
}
```

## Features

✅ **Responsive Design** - Works on desktop and mobile devices
✅ **Component Reusability** - Student component used multiple times
✅ **Props Usage** - Data passed via props
✅ **JSX Syntax** - HTML-like syntax in JavaScript
✅ **Hover Effects** - Interactive card animations
✅ **Modern Styling** - Gradient backgrounds and smooth transitions

## Learning Outcomes

After completing this experiment, you'll understand:
- How to create functional React components
- How to use JSX syntax effectively
- How to pass and use props
- How to render lists of components
- Component composition and reusability
- Basic React project setup

## Notes

- The application uses React 18.2.0
- All styling is handled with CSS (no external UI libraries)
- The Student component is highly reusable and can accept any name, course, and marks values
