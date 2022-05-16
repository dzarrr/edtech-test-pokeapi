import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'

import { Home } from 'components/Home'

import 'assets/styles/main.scss'

export default function App() {
  return (
    <Router
      basename='/edtech-test-pokeapi'
    >
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  )
}