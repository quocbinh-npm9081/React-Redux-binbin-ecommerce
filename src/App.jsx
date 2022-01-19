import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import store from './components/redux/store/store';
import Navbar from './components/navbar/Navbar';
import Routers from './components/routers';
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <React.Fragment>

          <Navbar></Navbar>
          <Routers></Routers>

        </React.Fragment>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
