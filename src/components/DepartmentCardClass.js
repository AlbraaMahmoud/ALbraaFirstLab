import React from 'react';
import PropTypes from 'prop-types';
import './DepartmentCard.css';

class DepartmentCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentCount: this.props.department.numberOfStudents,
    };
    this.incrementStudents = this.incrementStudents.bind(this);
  }

  incrementStudents() {
    this.setState(prevState => ({
      studentCount: prevState.studentCount + 1,
    }));
  }

  render() {
    const { department } = this.props;
    const { studentCount } = this.state;

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
        <button onClick={this.incrementStudents}>زيادة عدد الطلاب</button>
      </div>
    );
  }
}

DepartmentCardClass.propTypes = {
  department: PropTypes.shape({
    departmentName: PropTypes.string.isRequired,
    numberOfStudents: PropTypes.number.isRequired,
    programs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default DepartmentCardClass;