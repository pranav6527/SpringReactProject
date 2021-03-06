import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';

class UpdateEmployeeComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      id : this.props.match.params.id,
      firstName : '',
      lastName : '',
      emailId : ''

    };

    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeLastName = this.changeLastName.bind(this)
    this.changeEmailId = this.changeEmailId.bind(this)
    this.update = this.update.bind(this)
    this.cancel = this.cancel.bind(this)

  }

  componentDidMount() 
{
  EmployeeServices.getEmployeeById(this.state.id).then((res)=>{
    let employee = res.data;
    this.setState({firstName : employee.firstName,
                    lastName : employee.lastName,
                    emailId:   employee.emailId
    });
  });
}

  changeFirstName=(e)=>{
    this.setState({firstName: e.target.value})
  }

  changeLastName=(e)=>{
    this.setState({lastName: e.target.value})
  }

  changeEmailId=(e)=>{
    this.setState({emailId: e.target.value})
  }

  update=(e) =>{
    e.preventDefault();
    let employee = {firstName : this.state.firstName , lastName : this.state.lastName ,emailId : this.state.emailId}

    console.log("employee",JSON.stringify(employee));
  }

  cancel = (e) => {
    this.props.history.push("/employees")
  }

  render() {
    return (
      <div>
        <div className="container md-auto col-6 mt-4">
        <div className="card bg-info">
  <div className="card-header text-center bg-secondary text-white">
    UPDATE EMPLOYEE
  </div>
  <div className="card-body">
   <form action="">
   <div className="form-group">
    <label htmlFor="fistNamelabel">First Name</label>
    <input  className="form-control" id="firstName" placeholder="First Name"
    value ={this.state.firstName} onChange ={this.changeFirstName}
    />
  </div>
  <div className="form-group">
    <label htmlFor="lastNamelabel">Last Name</label>
    <input type="text" className="form-control" id="lastName" placeholder="Last Name"
    value ={this.state.lastName} onChange ={this.changeLastName}
    />
  </div>
  <div className="form-group">
    <label htmlFor="emailidlabel">Email Id</label>
    <input type="text" className="form-control" id="emailId" placeholder="Email Id"
    value ={this.state.emailId} onChange ={this.changeEmailId}
    />
  </div>
  <div className = "text-center mt-4">
  <button type="submit" className="btn btn-dark mx-4" onClick={this.update}>Add</button>
  <button type="submit" className="btn btn-danger" onClick={this.cancel}>Cancel</button>
  </div>
   </form>
  </div>
</div>
        </div>
      </div>
    );
  }

}
  

export default UpdateEmployeeComponent;