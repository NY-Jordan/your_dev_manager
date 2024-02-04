import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Screen/Home';
import Dashboard from '../Screen/Dashboard';
import Projects from '../Screen/Projects';
import CodeReview from '../Screen/CodeReview';
import Notes from '../Screen/Notes';


export default function Navigation() {
  return (
    <BrowserRouter>
        <Routes >
            <Route path="/" element={<Dashboard />} /> 
            <Route path="/projects"  name="projects"   element={<Projects />} /> 
            <Route path="/codereview"  element={<CodeReview />} /> 
            <Route path="/notes"  element={<Notes />} /> 
            <Route path="/"  element={<Notes />} /> 
            <Route path="/"  element={<Home />} /> 
        </Routes>
    </BrowserRouter>
  )
}
