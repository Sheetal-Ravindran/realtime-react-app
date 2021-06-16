import React from 'react';
import './button.scss'

class Button extends React.Component {
    
    render()  {  
      const buttonClassName = `button-${this.props.type}`;
        return (
          <button className={buttonClassName} disabled={this.props.disabled}>{this.props.content}</button>                  
        );
      }
    };
    
export default Button;