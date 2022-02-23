import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav>
      <div className="nav">
        <h2 className='nav-logo'><Link to="/">Daily crypto check</Link></h2>
      </div>
    </nav>
  )
}
