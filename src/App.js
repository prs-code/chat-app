import React from "react";
import {Routes, Route} from 'react-router-dom';
//components
import Login from "./components/Login";


const  App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login /> } />
      </Routes>
    </div>
   
  );
}

export default App;
