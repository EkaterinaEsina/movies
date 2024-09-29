import React from 'react';

class SubscriptionForm extends React.Component{
  state = {
    termsAgreement: false,
    email: '',
    errors: {
      email: '', 
      termsAgreement: '',
    },
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleCheckboxInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.checked,
    })
  }

  validateEmail = () => {
    const regEx = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i;
    
    if (!this.state.email) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          email: 'Please enter your email address',
        }
      }));
    } else if (!regEx.test(this.state.email)) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          email: 'Incorrect email address',
        }
      }));
    } else {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          email: '',
        }
      }));
    }
  }

  validateTermsAgreement = () => {
    if (!this.state.termsAgreement) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          termsAgreement: 'You have to agree with Terms',
        }
      }));
    } else {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          termsAgreement: '',
        }
      }));
    }
  }

  handleFormSubmit = (event) => {
    const { email, termsAgreement, errors } = this.state;

    event.preventDefault();
    this.validateEmail();
    this.validateTermsAgreement();

    if (errors.email || errors.termsAgreement) {
      return;
    } else {
      this.setState({
        email: '',
        termsAgreement: false,
        errors: {},
      });
    }
  }

  render() {
    const {
      termsAgreement,
      email,
      errors
    } = this.state;

    return (
      <div>
        <input
          type="email"
          name="email" 
          placeholder="Enter your email"
          value={email}
          onChange={this.handleInputChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <br />

        <label htmlFor="checkbox">Agree with Terms</label>
        <input
          id="checkbox"
          type="checkbox"
          name="termsAgreement"
          checked={termsAgreement}
          onChange={this.handleCheckboxInputChange}
        />
        {errors.termsAgreement && <p>{errors.termsAgreement}</p>}

        <br />

        <button type="submit" onClick={this.handleFormSubmit}>Send</button>
      </div>
    );
  }
}

export { SubscriptionForm };