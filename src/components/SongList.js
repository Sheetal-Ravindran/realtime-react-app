import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong, getAllSongs, deleteSong } from "../actions";
import AddSong from "./AddSong";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
            <button
              className="ui button primary"
              onClick={() => this.props.deleteSong(song)}
            >
              Delete
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  componentDidMount = () => {
    this.props.getAllSongs();
  };

  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
        <AddSong />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong,
  getAllSongs,
  deleteSong,
})(SongList);
