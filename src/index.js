import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import FormInput from './components/FormInput';

class App extends React.Component {
 
  render() {
    return (
      <div className="font-loader"> 
          <h2 className="reuse">Basic Details</h2>      
          <FormInput label = "Enter First Name " />
          <FormInput label = "Enter Last Name " />
          <div>
            <button>Submit</button>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
