import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';

class ListEmployeeComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employees: []
    };

    this.gotoAdd = this.gotoAdd.bind(this)
    this.editEmployee = this.editEmployee.bind(this)
  }

  componentDidMount()
  {
      EmployeeServices.getAllEmployee().then((res)=>{
        this.setState({
          employees : res.data
        })
      })
  }

  gotoAdd()
  {
    this.props.history.push("/addemployees")
    //console.log("pranav");
  }

  editEmployee(id)
  {
    this.props.history.push(`/updateemployee/${id}`);
    
  }

  render() {
    return (
      <div>
        <h2 className="text-center text-danger py-2">Employee List </h2>
        <button onClick = {this.gotoAdd}>Add</button>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                  {
                    this.state.employees.map(
                      employee =>
                      <tr key = {employee.id}>
                        <td >{employee.firstName}</td>
                        <td >{employee.lastName}</td>
                        <td >{employee.emailId}</td>
                        <td>
                          <button onClick ={() =>this.editEmployee(employee.id)}className="btn btn-info">Update</button>
                        </td>
                      </tr>
                    )
                  }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;