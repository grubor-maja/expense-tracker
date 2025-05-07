import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ExpensesPage from './pages/ExpensesPage'

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element = {<ExpensesPage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
