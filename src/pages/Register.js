import React from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import "./register.scss";

class Register extends React.Component {
  render() {
    return (
      <div className="validation">
        <div>
          <FormInput
            label="First name "
            type="text"
            name="firstName"
            className="firstName"
          />
          <FormInput
            label="Last name "
            type="text"
            name="lastName"
            className="secondName"
          />
        </div>
        <div>
          <FormInput
            label="Email address "
            type="email"
            name="email"
            className="email"
          />
        </div>
        <div>
          <FormInput
            label="Password"
            type="password"
            name="password"
            className="password"
          />
        </div>
        <div>
          <Button type="primary" content="Register" disabled={false} />
        </div>
      </div>
    );
  }
}

export default Register;
