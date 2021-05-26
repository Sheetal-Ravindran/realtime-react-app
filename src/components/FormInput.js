import React from 'react';

class FormInput extends React.Component {

  constructor() {
    super();
    this.state = { name:'', backgroundColor:''}
    this.onInputChange = this.onInputChange.bind(this);
  }   

  onInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.validateField(name, value);
  }
    
  validateField(fieldName, value) {
    let backgroundColor = this.state.backgroundColor;
    switch(fieldName) {
      case 'name':
        if (!value.match(/^[a-zA-Z ]*$/)) {         
          backgroundColor = 'red';
        }
        else  {
          backgroundColor='';
        }
        break;
      default:
        break;
    }

    this.setState({
        name: value,
        backgroundColor: backgroundColor,
      });
    }

  render()  {   
    
    const isLabelEmpty = this.props.label === " " ? true : false; 
    const renderLabel = () => {
      if (isLabelEmpty) {
        return null;
      } 
      else {
        return <label className="label" htmlFor="name"> {this.props.label} </label>;
      }
    }  

    return(
      <div>
        {renderLabel()}
        <input id="name" type="text" name="name" value={this.state.name} onChange={this.onInputChange} style={{backgroundColor:this.state.backgroundColor}} />                                      
      </div>
    );
  }
};

export default FormInput;