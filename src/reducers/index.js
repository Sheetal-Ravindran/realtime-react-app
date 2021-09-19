import { combineReducers } from "redux";

const songsList = [
  { title: "No Scrubs", duration: "4:05" },
  { title: "Macarena", duration: "2:30" },
  { title: "All Star", duration: "3:15" },
  { title: "I Want it That Way", duration: "1:45" },
];

const songsReducer = (songs = [], action) => {
  if (action.type === "GET_SONGS") {
    return songsList;
  }
  if (action.type === "ADD_SONG") {
    const newSongList = JSON.parse(JSON.stringify(songs));
    if (action.payload.title && action.payload.duration) {
      newSongList.push(action.payload);
    }
    return newSongList;
  }

  if (action.type === "DELETE_SONG") {
    const newSongList = songs.filter(
      (song) => song.title !== action.payload.title
    );
    return newSongList;
  }

  return songs;
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    console.log(action);
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
