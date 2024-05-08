import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import './App.css'
import Home from './routes/Home'

function About() {
  return <div>About</div>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/login" element={<div>Login Please!</div>} />
        
      </Routes>
    </Router>
  )
}

export default App