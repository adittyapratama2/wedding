import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPages from "./pages/RootPages";
import HomePages from "./pages/HomePage";

//fonts
import "./assets/fonts/Baselliost.otf";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/guest/:id" element={<RootPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
