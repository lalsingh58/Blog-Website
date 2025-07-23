import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Blog />} />
      </Routes>
    </>
  );
}
export default App;
