import React from "react";
import SongRow from "./SongRow";
function SongList({ songs }) {
  return (
    <div className="songListTitel">
      <div className="songListPley"></div>
      <div className="songListName">Song Name</div>
      <div className="songListName">Artist Name</div>
      <div className="songListTrack">Track</div>
      <div className="songListIcon"></div>
      <ul>
        {songs.map((song, index) => (
          <SongRow key={index} song={song} />
        ))}
      </ul>
    </div>
  );
}
export default SongList;
