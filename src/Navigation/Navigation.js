import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Screen/Home';

export default function Navigation() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home />} /> 
        </Routes>
    </BrowserRouter>
  )
}
