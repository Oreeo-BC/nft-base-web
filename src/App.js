import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Market from './views/Market';
import { BrowserRouter as Router } from 'react-router-dom';
import Collections from './components/Collection/Collections';
import { collectionData } from './components/Collection/data';

function App() {
  return (
    <Router>
      <Navbar/>
      <Market/>
      <Collections data={collectionData}/>
    </Router>
  );
}

export default App;