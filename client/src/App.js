import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          
          <Route path="Home" element={<Home />} />
          
          <Route path="/" element={<Login />} />

          

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App