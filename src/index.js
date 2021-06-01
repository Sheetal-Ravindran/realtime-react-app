import React from 'react';
import ReactDOM from 'react-dom';
import FormInput from './components/FormInput';
import './main.scss';

class App extends React.Component {
 
  render() {
   
    return (
      <div className="validation"> 
          <h2 className="reuse">Basic Details</h2>      
          <FormInput label = "Enter First Name " type = "text"/>
          <FormInput label = "Enter Last Name " type = "text"/>
          <div>
            <button className="submit-btn">Submit</button>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
