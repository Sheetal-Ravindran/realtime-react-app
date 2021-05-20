import React from 'react';

class PersonalInfo extends React.Component {

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
    return  (
      <div>
        <label className="label" htmlFor="name">
          Enter {this.props.label} Name
        </label>
        <input id="name" type="text" name="name" value={this.state.name} onChange={this.onInputChange} style={{backgroundColor:this.state.backgroundColor}} />                                      
      </div>                   
    );
  }
};

export default PersonalInfo;