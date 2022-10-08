import React from "react";
import './App.css';
import Home from './pages/Home.js';
import SearchPage from "./pages/SearchPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/search" element={<SearchPage/>}></Route>
        </Routes>


      </Router>


    </div>
  );
}

export default App;
