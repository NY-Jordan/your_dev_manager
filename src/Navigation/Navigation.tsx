import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Home from '../Screen/Home';
import Dashboard from '../Screen/Dashboard';
import Projects from '../Screen/Projects';
import CodeReview from '../Screen/CodeReview';
import Notes from '../Screen/Notes';
import Layout from '../Screen/Layout';


export default function Navigation() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/codereview",
          element: <CodeReview />,
        },
        {
          path: "/notes",
          element: <Notes />,
        },
      ],
    },
  ]);
  return (
    
    <RouterProvider router={router} />
  )
}
