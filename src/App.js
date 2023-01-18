import React from 'react';
import SongContainer from './countainers/SongsContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The current UK top 20 songs</h1>
      <SongContainer/>
    </div>
  );
}

export default App;
