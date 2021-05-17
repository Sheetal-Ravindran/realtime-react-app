import React from 'react';

class PersonalInfo extends React.Component {

  constructor() {
    super();
    this.state = { name:'', bgColor:''}
    this.onInputChange = this.onInputChange.bind(this);
    this.validateField = this.validateField.bind(this);
  }   

  onInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.validateField(name, value);
  }
    
  validateField(fieldName, value) {
    let backgroungColor = this.state.bgColor;
    switch(fieldName) {
      case 'name':
        if (!value.match(/^[a-zA-Z ]*$/)) {         
          backgroungColor = 'red';
        }
        else{
          backgroungColor='';
        }
        break;
        default:
        break;
    }

    this.setState({
        name: value,
        bgColor: backgroungColor,
      });
    }

  render(){
    return (
      <div>
        <label className="label" htmlFor="name">
          Enter {this.props.lable} Name
        </label>
        <input id="name" type="text" name="name" value={this.state.name} onChange={this.onInputChange} value={this.state.name} style={{backgroundColor:this.state.bgColor}} />                                      
      </div>                   
    );
  }
};

export default PersonalInfo;