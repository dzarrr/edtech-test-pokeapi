import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'

import { Home } from './components/Home'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}