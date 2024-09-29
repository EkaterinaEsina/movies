import React from 'react';

class FormWithRef extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      age: '',
      comment: '',
      checkbox: false,
      email: '',
      firstName: '',
      gender: '',
      select: '',

      errors: {
        email: '', 
        termsAgreement: '',
      },
    }

    this.emailRef = React.createRef();
    this.firstNameRef = React.createRef();
  }

  handleInputChange = (event) => {
    this.setState(
      { [event.target.name]: event.target.value },
      () => {
        debugger;
        if (this.state.firstName.length === 16) {
          this.emailRef.current.focus();
        }
      }
    )
  }

  handleCheckboxInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.checked,
    })
  }

  validateFirstName = () => {
    if (this.state.firstName.length < 3) {
      this.setState({
        errors: {
          ...this.state.errors,
          firstName: 'First name must be at least 3 characters long',
        }
      })
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          firstName: '',
        }
      })
    }
  }

  validateEmail = () => {
    const regEx = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i;
    
    if (!regEx.test(this.state.email)) {
      this.setState({
        errors: {
          ...this.state.errors,
          email: 'Incorrect email address',
        }
      })
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          email: '',
        }
      })
    }
  }

  componentDidMount() {
    console.log(this.firstNameRef);
    debugger;
    this.firstNameRef.current.focus();
  }

  render() {
    const {
      age,
      comment,
      checkbox,
      email,
      firstName,
      gender,
      select,
      errors
    } = this.state;

    return (
      <div>
        <input
          ref={this.firstNameRef}
          type="text"
          name="firstName" 
          placeholder="Enter your first name"
          value={firstName}
          onChange={this.handleInputChange}
          // onBlur={this.validateFirstName}
        />
        {errors.firstName && <p>{errors.firstName}</p>}

        <br />

        <input
          ref={this.emailRef}
          type="email"
          name="email" 
          placeholder="Enter your email"
          value={email}
          onChange={this.handleInputChange}
          // onBlur={this.validateEmail}
        />
        {errors.email && <p>{errors.email}</p>}

        <br />

        <input
          type="number"
          name="age" 
          placeholder="Enter your age"
          value={age}
          onChange={this.handleInputChange}
        />

        <br />

        <textarea
          name="comment"
          placeholder="Enter your comment"
          value={comment}
          onChange={this.handleInputChange}
        />

        <br />

        <select
          name="select"
          value={select}
          onChange={this.handleInputChange}
        >
          <option value="" disabled></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <br />

        <label htmlFor="checkbox">Checkbox</label>
        <input
          id="checkbox"
          type="checkbox"
          name="checkbox"
          checked={checkbox}
          onChange={this.handleCheckboxInputChange}
        />

        <br />

        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={this.handleInputChange}
        />
        Male

        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={this.handleInputChange}
        />
        Female
      </div>
    );
  }
}

export { FormWithRef };