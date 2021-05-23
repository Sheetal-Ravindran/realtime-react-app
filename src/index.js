import React from 'react';
import ReactDOM from 'react-dom';
import './mysass.scss';
import BasicDetails from './components/BasicDetails';

class App extends React.Component {
 
  render() {
    return (
      <div className="font-loader"> 
          <h2 className="reuse">Basic Details</h2>      
          <BasicDetails label = "Enter First Name " />
          <BasicDetails label = "Enter Last Name " />
          <div>
            <button>Submit</button>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
