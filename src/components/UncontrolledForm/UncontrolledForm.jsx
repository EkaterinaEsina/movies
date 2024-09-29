import React from 'react';

class UncontrolledForm extends React.Component{
  constructor() {
    super();

    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.firstNameRef.current.value.length < 2) {
      alert('Invalid length of first name');
      return;
    }

    if (this.lastNameRef.current.value.length < 2) {
      alert('Invalid length of last name');
      return;
    }

    this.firstNameRef.current.value = '';
    this.lastNameRef.current.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            ref={this.firstNameRef}
            type="text"
            name="firstName" 
            placeholder="Enter your first name"
          />

          <br />

          <input
            ref={this.lastNameRef}
            type="text"
            name="lastName" 
            placeholder="Enter your last name"
          />

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export { UncontrolledForm };