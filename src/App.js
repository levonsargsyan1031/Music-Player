import React, { useState } from 'react';
import './App.css';
import TopToolBar from './componets/TopToolBar';
import SongList from './componets/SongList';




function App() {
  const [songs, setSongs] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSongUpload = (songData) => {
    // Update state with the uploaded song
    setSongs([...songs, songData]);
    // Reset selected file
    setSelectedFile(null);
  };


  return (
    <div className="App">
     <TopToolBar 
      SelectedFile={selectedFile}
      onFileChange={(file) => setSelectedFile(file)}
      onSongUpload={handleSongUpload}
     />
     <SongList songs={songs} />
    </div>


 
  );
}

export default App;
