import React from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import "./register.scss";
import { submitForm } from "../actions";
import { connect } from "react-redux";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
    };
    this.showData = this.showData.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue(val) {
    this.setState({ inputVal: val });
    console.log(this.state.inputVal);
  }

  showData() {
    // this.props.submitForm({
    //   firstName: this.state.firstName,
    //   secondName: this.state.secondName,
    // });
    console.log("value" + this.state.inputVal);
  }

  render() {
    return (
      <div className="content">
        <div>
          <FormInput
            handleInput={this.handleInputValue}
            parent
            label="First name "
            type="text"
            id="firstName"
            className="firstName"
          />
        </div>
        <div>
          <FormInput
            handleInput={this.handleInputValue}
            label="Last name "
            type="text"
            id="lastName"
            className="secondName"
          />
        </div>
        <div>
          <FormInput
            label="Email address "
            type="email"
            id="email"
            className="email"
          />
        </div>
        <div>
          <FormInput
            label="Password"
            type="password"
            id="password"
            className="password"
          />
        </div>
        <div>
          <Button
            type="primary"
            content="Register"
            disabled={false}
            onClick={this.showData}
          />
        </div>
      </div>
    );
  }
}

// export default Register;
export default connect(() => {}, { submitForm })(Register);
