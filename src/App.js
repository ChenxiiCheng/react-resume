import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Info from './components/Info/Info';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Route path="/" component={Info} />
      </div>
    </BrowserRouter>
  );
}

export default App;