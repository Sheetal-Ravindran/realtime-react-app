import React from 'react';
import ReactDOM from 'react-dom';
import Register from './pages/Register';


class App extends React.Component {
 
  render() {
   
    return (
      // <div className="validation"> 
      //     <h2 className="header">Basic Details</h2>      
      //     <FormInput label="Enter First Name " type="text"/>
      //     <FormInput label="Enter Last Name " type="text"/>
      //     <div>
      //       <Button type="primary" content="Primary" disabled={false}/> 
      //       <Button type="secondary" content="Secondary" disabled={false}/>
      //     </div>         
      // </div>
      <Register/>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
