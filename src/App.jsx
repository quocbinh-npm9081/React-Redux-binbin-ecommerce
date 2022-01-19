import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Routers from './components/routers';
function App() {
  return (
    <BrowserRouter>
      <React.Fragment>

        <Navbar></Navbar>
        <Routers></Routers>

      </React.Fragment>
    </BrowserRouter>

  );
}

export default App;
