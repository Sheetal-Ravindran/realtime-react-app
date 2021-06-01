import React from 'react';

class FormInput extends React.Component {

  constructor() {
    super();
    this.state = { name:'', errorMessage:'' }
    this.onInputChange = this.onInputChange.bind(this);
  }   

  onInputChange(event) {
    let type = event.target.type;
    let value = event.target.value;
    this.validateField(type, value);
  }
    
  validateField(type, value) {

    let errorMessage = this.state.errorMessage;
    switch(type) {

      case 'text':
        if (!value.match(/^[a-zA-Z ]*$/)) {         
          errorMessage = 'Only Alphabets allowed';
        }
        else  {
          errorMessage='';
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

  render()  {  

    const renderInput = () => {
      if (this.props.label) {
        return  <div  className="form-group">
          <input className="input-field"  type={this.props.text}  value={this.state.name} onChange={this.onInputChange} />   
          <label className="label-text">{this.props.label}</label>
          <br></br>
          <span className="error-focus">{this.state.errorMessage}</span>
          <br></br>     
        </div>
        
      } 
      else {  
        return null;
      }
    }  

    return(
      <form>
        {renderInput()}      
      </form>
    );
  }
};

export default FormInput;