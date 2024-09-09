import logo from "./logo.svg";
import "./App.css";

// src/App.js
import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Main1Content from "./components/Main1Content";
import Sidebar from "./components/Sidebar";
import SlideBar from "./components/slideBar";
import SubContent from "./components/SubContent";
function App() {
  return (
    <div className="App">
      <Header />
      <SlideBar />

      <MainContent />
      <Main1Content/>

    </div>
  );  
}

export default App;
