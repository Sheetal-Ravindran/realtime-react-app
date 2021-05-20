import React from 'react';
import ReactDOM from 'react-dom';
import './mysass.scss';
import PersonalInfo from './PersonalInfo';

class App extends React.Component {
 
  render() {
    return (
      <div>
        <div className="container">
          <h1>Hello!</h1>
          <p>This is my first Saas project!.</p>
        </div>
        <div className="validation">   
          <h2 className="reuse">Component Reuse</h2>      
          <PersonalInfo label = "First" />
          <PersonalInfo label = "Second" />
          <button>Submit</button>
        </div>
        <div>
          <h1 className="navigation-title">Nesting Example</h1>
          <nav className="navigation">
            <ul>
              <li><a href="https://google.com">HTML</a></li>
              <li><a href="https://google.com">CSS</a></li>
              <li><a href="https://google.com">SASS</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
