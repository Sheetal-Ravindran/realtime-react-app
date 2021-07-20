import React from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import "./register.scss";

class Register extends React.Component {
  render() {
    return (
      <div className="content">
        <div>
          <FormInput
            label="First name "
            type="text"
            id="firstName"
            className="firstName"
          />
        </div>
        <div>
          <FormInput
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
          <Button type="primary" content="Register" disabled={false} />
        </div>
      </div>
    );
  }
}

export default Register;
