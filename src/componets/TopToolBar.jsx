import React, { useState, useEffect } from 'react';
import PlayAllButton from './PlayAllButton';
import AddAllButton from './AddAllButton'
import "./stayel.css";

function UploadProgress({ selectedFile, uploadProgress, handleUpload }) {
  return (
    <div>
      <p>Selected File: {selectedFile.name}</p>
      <button onClick={handleUpload} disabled={uploadProgress > 0}>
        Upload
      </button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
    </div>
  );
}

function TopToolBar({ selectedFile, onFileChange, onSongUpload }) {
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
    console.log(file)
  };

  const handleUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress === 100) {
        clearInterval(interval);
        const songData = {
          songName: 'Uploaded Song',
          artistName: 'Uploader',
          trackNumber: false.length + 1,
        };
        onSongUpload(songData);
      }
    }, 500);
  };
  const handleAddAll = () => {
    // Simulate adding all songs to a queue
    console.log('Simulating adding all songs to a queue');
  };

  useEffect(() => {
    setUploadProgress(0);
  }, [selectedFile]);
  const handlePlayAll = () => {
    // Simulate playing all songs

    console.log('Simulating playing all songs');
  };
  return (
    <header className="header">
      <div className="start">
        <div>
          <PlayAllButton  onPlayAll={handlePlayAll} />
        </div>
        <div>
        <AddAllButton onAddAll={handleAddAll} />
        </div>
      </div>
      <div className="end">
        <div>
          <input
            className="input"
            type="file"
            accept=".mp3, .wav"
            onChange={handleFileChange}
          />
          {selectedFile && (
            <UploadProgress
              selectedFile={selectedFile}
              uploadProgress={uploadProgress}
              handleUpload={handleUpload}
            />
          )}
        </div>
        <div></div>
      </div>
    </header>
  );
}

export default TopToolBar;
