import React from 'react';
import ReactDOM from 'react-dom';
import Register from './pages/Register';


class App extends React.Component {
 
  render() {
   
    return (    
      <Register/>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
