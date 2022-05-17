import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import { Home } from 'components/page/Home'
import { Bookmark } from 'components/page/Bookmark'
import { Detail } from 'components/page/Detail'

import 'assets/styles/main.scss'

export default function App() {
  return (
    <Router
      basename='/edtech-test-pokeapi'
    >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookmark" element={<Bookmark/>}/>
        <Route path="/detail/:pokemon" element={<Detail/>}/>
      </Routes>
    </Router>
  )
}