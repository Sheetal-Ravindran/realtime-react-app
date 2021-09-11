import React, { Component } from "react";
import { addSong } from "../actions";
import { connect } from "react-redux";

class AddSong extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.addSong({ title: "Song1", duration: "3:45" })}
      >
        Add Song
      </button>
    );
  }
}

export default connect(() => {}, { addSong })(AddSong);
