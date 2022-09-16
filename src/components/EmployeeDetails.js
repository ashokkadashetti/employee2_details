import React, { Component } from 'react';

export class EmployeeDetails extends Component {

    constructor(props){
        super()
    }

  render() {

    const {employeeDetails} = this.props
    const {empDetails} = employeeDetails.deptDetails
    const {dept_name, no_of_emp, dept_manager} = employeeDetails.deptDetails

    return (

     <div>
        <div className='tech-data'>
            <div>
                <h2>Department Details</h2>
                <p>Dept_name : {dept_name}</p>
                <p>No_of_emp : {no_of_emp}</p>
                <p>Dept_mngr : {dept_manager}</p>
            </div>
            <h2>Employee List</h2>
            <table>
                <tr>
                  <th>EmpId</th>
                  <th>Name</th>
                  <th>DOJ</th>
                  <th>Tech</th>
                </tr>
            
                {
                    empDetails.map((item, index) =>{
                        return(
                            <tr key={index}> 
                                <td>{item.emp_id}</td>
                                <td>{item.name}</td>
                                <td>{item.doj}</td>
                                <td>{item.tech ? item.tech : ''}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    </div>
    );
  }
}

export default EmployeeDetails;
