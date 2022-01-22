import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/home';
import Whitepaper from './pages/whitepaper';
//import App from './App';
//<App />

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/whitepaper"  element={<Whitepaper/>}/>     
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

