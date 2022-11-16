import logo from './logo.svg';
import './App.css';
import React from 'react'
import RouterApp from './config/router';
import Login from './screen/login';
function App() {
  return (
    <div>
      <RouterApp/>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
