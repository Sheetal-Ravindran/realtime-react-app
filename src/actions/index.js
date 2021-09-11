// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export const getAllSongs = () => {
  return {
    type: "GET_SONGS",
  };
};

export const addSong = (song) => {
  return {
    type: "ADD_SONG",
    payload: song,
  };
};
