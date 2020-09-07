import React, { Component } from 'react';

class HeaderComponent extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }

  render() {
    return (
      <div>

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/employees">Employee Management System</a>
          <a className="navbar-brand" href="/addemployees">Add Employees</a>
        </nav>



      </div>
    );
  }
}

export default HeaderComponent;