import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Class from "./Class";
import AddClass from "./AddClass";
import Student from "./Student";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/latest" element={<Class />} />
          <Route path="/:id/new" element={<AddClass />} />
          <Route path="/:id" element={<Student />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
