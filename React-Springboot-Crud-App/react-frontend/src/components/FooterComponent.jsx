import React, { Component } from 'react';

class FooterComponent extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {

    };

  }

  render() {
    return (
      <div className = "fixed-bottom">
        <footer className="page-footer font-small blue">


          <div className="footer-copyright text-center py-3">© 2020 Copyright
          </div>


        </footer>

      </div>
    );
  }
}






export default FooterComponent;