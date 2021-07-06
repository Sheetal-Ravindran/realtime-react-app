import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import '../main.scss';

class Register extends React.Component {
 
  render() {
   
    return (
      <div className="validation">    
        <div>
          <FormInput label="First name " type="text"/>          
          <FormInput label="Last name " type="text"/>
        </div>
        <div>
          <FormInput label="Email address " type="email" />
        </div>
        <div>
          <FormInput label="Password" type="password" />
        </div>
        <div>
          <Button type="primary" content="Register" disabled={false}/> 
        </div>         
      </div>
    );
  }
}

export default Register;