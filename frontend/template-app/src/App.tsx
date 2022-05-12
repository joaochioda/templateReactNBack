import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./Container/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>aboutss</div>} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
