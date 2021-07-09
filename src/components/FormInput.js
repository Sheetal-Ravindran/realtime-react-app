import React from 'react';
import './formInput.scss';
import '../pages/Register';

class FormInput extends React.Component {

  constructor() {
    super();
    this.state={ name:'', errorMessage:'', isFocus: false, hasText: false, hidden: true }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.showPassword = this.showPassword.bind(this);
  }   

  onFocus() {
    this.setState({ isFocus: true })  
  }

  onBlur() {
    this.setState({ isFocus: false })
  }

  onInputChange(event) {
    let type=event.target.type;
    let value=event.target.value; 

    if(value) {
      this.setState({ hasText: true })
      this.validateField(type, value); 

    }
    else{
      this.setState({ hasText: false })
    }
  }
    
  validateField(type, value) {
    let errorMessage='';
    if (!value.length) {         
      errorMessage = this.props.label +' is Required';
    }   

    switch(type) {
      case 'text':             
        if (value.length === 1) {         
          errorMessage = 'Too Short!';
        }      
        break;
      case 'email':
          const reg = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
          if (!value.match(reg)) {         
            errorMessage='Email must be a valid email address';
          }                 
          break;    
      default:
        break;      
    }

    this.setState({
        name: value,
        errorMessage: errorMessage
      });
    }

  showPassword() {
    this.setState({ hidden: !this.state.hidden });  
  }

  render()  {  
    const labelClassName = this.state.isFocus || this.state.hasText ? "label-text-active" : "label-text";
    const inputClassName = this.state.hasText ? "input-field-hasText-"+ this.props.name : "input-field-"+ this.props.name;
    const setPasswordType = this.state.hidden ? "password" : "text";
    
    const renderInput = () => {
      if (this.props.type==='password') {
        return  <div  className="form-group">
          <label className={labelClassName}>{this.props.label}</label>          
          <input className={inputClassName} type={setPasswordType} value={this.state.name} onChange={this.onInputChange} onFocus={this.onFocus} onBlur={this.onBlur} />           
          <i className="bi-eye-slash" id="togglePassword" onClick={this.showPassword}></i>
          <br></br>
          <span className="error-focus">{this.state.errorMessage}</span>
          <br></br>     
        </div>     
      } 
      else {  
        return  <div  className="form-group">
        <label className={labelClassName}>{this.props.label}</label>          
        <input className={inputClassName} type={this.props.type} value={this.state.name} onChange={this.onInputChange} onFocus={this.onFocus} onBlur={this.onBlur}/>                 
        <br></br>
        <span className="error-focus">{this.state.errorMessage}</span>
        <br></br>     
      </div>    
      }
    }  

    return(       
      renderInput()        
    );
  }
};

export default FormInput;