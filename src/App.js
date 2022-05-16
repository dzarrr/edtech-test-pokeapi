import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import { Home } from 'components/Home'
import { Bookmark } from 'components/Bookmark'

import 'assets/styles/main.scss'

export default function App() {
  return (
    <Router
      basename='/edtech-test-pokeapi'
    >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookmark" element={<Bookmark/>}/>
      </Routes>
    </Router>
  )
}