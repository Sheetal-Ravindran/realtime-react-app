import React from 'react';
import './button.scss'

class Button extends React.Component {
    
    render()  {  
            return (
            <div  className="form-group">
              <button className="submit-btn">{this.props.type}</button>                 
            </div>     
        );
      }
    };
    
export default Button;