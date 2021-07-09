import React from "react";
import ReactDOM from "react-dom";
import Register from "./pages/Register";

class App extends React.Component {
  render() {
    return (
      <form>
        <Register />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
