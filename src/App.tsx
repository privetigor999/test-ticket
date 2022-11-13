import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Avia } from "./pages/Avia/Avia";
import { Info } from "./pages/Avia/Info/Info";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/avia" />} />
        <Route path="/avia" element={<Avia />} />
        <Route path="/avia/info" element={<Info />} />
        <Route path="*" element={<Navigate to="/avia" />} />
      </Routes>
    </div>
  );
}

export default App;
