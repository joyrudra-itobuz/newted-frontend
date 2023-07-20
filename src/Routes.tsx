import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NewNote from "./pages/newNote/NewNote";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-note" element={<NewNote />} />
      </Routes>
    </BrowserRouter>
  );
}
