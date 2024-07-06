// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Chart from "./pages/chart"
import Home from "./pages/home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/notfound";

function App() {

  return (
    <>
      {/*  */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>

      {/*  */}
    </>
  )
}

export default App
