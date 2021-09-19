import React, { Component } from "react";
import { addSong } from "../actions";
import { connect } from "react-redux";

class AddSong extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      duration: "",
    };

    this.titleChange = this.titleChange.bind(this);
    this.durationChange = this.durationChange.bind(this);
    this.addSong = this.addSong.bind(this);
  }

  titleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }
  durationChange(event) {
    this.setState({
      duration: event.target.value,
    });
  }

  addSong() {
    this.props.addSong({
      title: this.state.title,
      duration: this.state.duration,
    });
  }
  render() {
    return (
      <div>
        <div className="ui input">
          <input
            className="input-text"
            type="text"
            onChange={this.titleChange}
            name="titleText"
            placeholder="Title"
          ></input>
        </div>
        <div className="ui input">
          <input
            className="input-text"
            type="text"
            name="durationText"
            onChange={this.durationChange}
            placeholder="Duration"
          ></input>
        </div>
        <button
          className="ui button primary"
          //   onClick={() =>
          //     this.props.addSong({ title: "Song1", duration: "3:45" })
          //   }
          onClick={this.addSong}
        >
          Add Song
        </button>
      </div>
    );
  }
}

export default connect(() => {}, { addSong })(AddSong);
