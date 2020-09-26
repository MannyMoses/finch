import React from 'react';
import './App.css';
import API from '../src/utils/API';
import Register from './pages/Register/register';

function App() {
  return (
    <div className="App">
      <API />
      <Register/>
    </div>
  );
}

export default App;
