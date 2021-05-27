import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class FormInput extends React.Component {

  constructor() {
    super();
    this.state = { name:'', errorMessage:''}
    this.onInputChange = this.onInputChange.bind(this);
  }   

  onInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.validateField(name, value);
    console.log("onInputChange");
  }
    
  validateField(fieldName, value) {

    let errorMessage = this.state.errorMessage;
    switch(fieldName) {
      case 'name':
        if (!value.match(/^[a-zA-Z ]*$/)) {         
          errorMessage = 'Only Alphabets allowed';
        }
        else  {
          errorMessage='';
        }
        break;
      default:
        break;      
    }

    this.setState({
        name: value,
        errorMessage: errorMessage,
      });
    }

  render()  {  

    const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    }));
   
    const isLabelEmpty = this.props.label === " " ? true : false; 

    const renderLabel = () => {
      if (isLabelEmpty) {
        return null;
      } 
      else {
        return  <TextField 
          id="outlined-error-helper-text" 
          name ="name" 
          label={this.props.label} 
          variant="outlined"
          value={this.state.name} 
          onChange={this.onInputChange} 
          helperText={this.state.errorMessage} 
          size="small" 
          margin='dense'/>;
      }
    }  

    return(
      <form className={useStyles.root} noValidate autoComplete="off">
        {renderLabel()}      
      </form>
    );
  }
};

export default FormInput;