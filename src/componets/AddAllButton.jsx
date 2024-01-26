import React from 'react';

const AddAllButton = ({ onAddAll }) => {
  return (
    <button className="button" onClick={onAddAll}>
      Add All
    </button>
  );
};

export default AddAllButton;
