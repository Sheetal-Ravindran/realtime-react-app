import React from 'react';
import ReactDOM from 'react-dom';
import FormInput from './components/FormInput';
import Button from './components/Button';
import './main.scss';

class App extends React.Component {
 
  render() {
   
    return (
      <div className="validation"> 
          <h2 className="header">Basic Details</h2>      
          <FormInput label="Enter First Name " type="text"/>
          <FormInput label="Enter Last Name " type="text"/>
          <div>
            <Button type="Primary"/> 
            <Button type="Secondary"/>
          </div>         
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
