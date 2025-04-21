import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DepartmentCard.css';

function DepartmentCardFunctional({ department }) {
  const [studentCount, setStudentCount] = useState(department.numberOfStudents);

  const incrementStudents = () => {
    setStudentCount(studentCount + 1);
  };

  return (
    <div className="department-card">
      <h2>{department.departmentName}</h2>
      <p>عدد الطلاب: {studentCount}</p>
      <div>
        <h3>البرامج:</h3>
        <ul>
          {department.programs.map((program, index) => (
            <li key={index}>{program}</li>
          ))}
        </ul>
      </div>
      <button onClick={incrementStudents}>زيادة عدد الطلاب</button>
    </div>
  );
}

DepartmentCardFunctional.propTypes = {
  department: PropTypes.shape({
    departmentName: PropTypes.string.isRequired,
    numberOfStudents: PropTypes.number.isRequired,
    programs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default DepartmentCardFunctional;