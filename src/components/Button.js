import React from 'react';
import './button.scss'

class Button extends React.Component {
    
    render()  {  
      const buttonClassName = this.props.type === "Primary" ? "primary" : "secondary";
      console.log(buttonClassName);
        return (
          <div  className="form-group">
            <button className={buttonClassName}>{this.props.type}</button>                 
          </div>     
        );
      }
    };
    
export default Button;