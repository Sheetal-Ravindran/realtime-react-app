import React from "react";
import "./formInput.scss";
import "../pages/Register";

class FormInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      errorMessage: "",
      isFocus: false,
      hasText: false,
      hidden: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.showPassword = this.showPassword.bind(this);
  }

  onFocus() {
    this.setState({ isFocus: true });
  }

  onBlur() {
    this.setState({ isFocus: false });
  }

  onInputChange(event) {
    let type = event.target.type;
    let value = event.target.value;

    if (value) {
      this.setState({ hasText: true });
    } else {
      this.setState({ hasText: false });
    }
    const errorMessage = this.validateField(type, value);

    this.setState({ value: value, errorMessage: errorMessage })
  }

  validateField(type, value) {
    let errorMessage = "";

    if (!value.length) {
      errorMessage = this.props.label + " is Required";
      return errorMessage;
    }

    switch (type) {
      case "text":
        if (value.length === 1) {
          errorMessage = "Too Short!";
        }
        break;
      case "email":
        const reg = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        if (!value.match(reg)) {
          errorMessage = "Email must be a valid email address";
        }
        break;
      default:
        break;
    }

    return errorMessage;
  }

  showPassword() {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    const labelClassName =
      this.state.isFocus || this.state.hasText
        ? "label-text-active"
        : "label-text";

    const inputClassName = this.state.hasText
      ? "input-field-hasText"
      : "input-field";

    const setPasswordType = this.state.hidden ? "password" : "text";

    const renderInput = (isPassword) => {
      if (isPassword) {
        return (<>
          <input
            className={inputClassName}
            type={setPasswordType}
            value={this.state.value}
            onChange={this.onInputChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
          <i
            className="bi-eye-slash"
            id="togglePassword"
            onClick={this.showPassword}
          ></i>
        </>)
      }

      return (<input
        className={inputClassName}
        type={this.props.type}
        value={this.state.value}
        onChange={this.onInputChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />)
    }

    return (
      <div className="form-group">
        <label className={labelClassName}>{this.props.label}</label>
        {renderInput(this.props.type === "password")}
        <br></br>
        <span className="error-focus">{this.state.errorMessage}</span>
        <br></br>
      </div>
    );
  }
}

export default FormInput;
