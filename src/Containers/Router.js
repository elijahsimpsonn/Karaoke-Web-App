import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Containers/Dashboard";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
