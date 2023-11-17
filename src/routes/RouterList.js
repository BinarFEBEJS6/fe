import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/Home";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
