import React from 'react'
import './App.css'
import Land from './Land'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
