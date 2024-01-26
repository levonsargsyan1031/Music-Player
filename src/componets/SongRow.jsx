import React from 'react';

function SongRow({ song }) {
  return (
    <li>
      <div>
        <span>{song.songName}</span>
        <span>{song.artistName}</span>
        <span>{song.trackNumber}</span>
      </div>
    </li>
  );
}

export default SongRow;