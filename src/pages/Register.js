import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import '../main.scss';

class Register extends React.Component {
 
  render() {
   
    return (
      <div className="validation">       
          <FormInput label="First Name " type="text"  />
          <FormInput label="Last Name " type="text" />
          <FormInput label="Email address " type="email" />
          <FormInput label="Password" type="password" />
          <div>
            <Button type="primary" content="Register" disabled={false}/> 
          </div>         
      </div>
    );
  }
}

export default Register;