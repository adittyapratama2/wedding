import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPages from "./pages/RootPages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<RootPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
