import React from 'react';
import DepartmentCardFunctional from './components/DepartmentCardFunctional';
import DepartmentCardClass from './components/DepartmentCardClass';
import './App.css';

function App() {
  const departmentData1 = {
    departmentName: 'Football Coaching and Training',
    numberOfStudents: 100,
    programs: ['Football Coaching', 'Sports Management', 'Fitness Training', 'Sports Psychology'],
  };

  const departmentData2 = {
    departmentName: 'Sports Science and Analysis',
    numberOfStudents: 90,
    programs: ['Biomechanics', 'Sports Nutrition', 'Performance Analysis', 'Injury Prevention'],
  };

  return (
    <div className="app-container">
      <div className="barcelona-header">
        <h1>Barcelona Training Departments</h1>
      </div>
      <div className="cards-container">
        <div className="component-section">
          <h2>Functional Component</h2>
          <DepartmentCardFunctional department={departmentData1} />
        </div>
        <div className="component-section">
          <h2>Class Component</h2>
          <DepartmentCardClass department={departmentData2} />
        </div>
      </div>
    </div>
  );
}

export default App;