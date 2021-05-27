import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormInput from './components/FormInput';
import './main.scss';

class App extends React.Component {
 
  render() {

    const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    }));
    
    return (
      <div className={useStyles.root}> 
          <h2 className="reuse">Basic Details</h2>      
          <FormInput label = "Enter First Name " />
          <FormInput label = "Enter Last Name " />
          <div>
            <Button variant="contained" color="primary">Submit</Button>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
