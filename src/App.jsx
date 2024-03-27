import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import OurAdvantage from './Pages/OurAdvantage'
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our_advantage" element={<OurAdvantage />} />
      </Routes>
    </Router>
  )
}

export default App