import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Class from "./Class";
import AddClass from "./AddClass";
import Student from "./Student";
import Header from "./components/Header";
import Auth from "./Auth";
import IsAuth from "./IsAuth";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <IsAuth>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/:id/latest" element={<Class />} />
            <Route path="/:id/new" element={<AddClass />} />
            <Route path="/students/:id" element={<Student />} />
          </Routes>
        </IsAuth>
      </Router>
    </div>
  );
}

export default App;
