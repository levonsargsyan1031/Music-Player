import React from 'react';

const PlayAllButton = ({ onPlayAll }) => {
  return (
    <button className="button" onClick={onPlayAll}>
      Play All
    </button>
  );
};

export default PlayAllButton;
