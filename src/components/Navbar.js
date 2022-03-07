import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <div className="nav">
        <h2 className='nav-logo'><Link to="/React-Crypto-API">Crypto check</Link></h2>
        <h3 className='nav-favorite'><Link to="/React-Crypto-API/favorite">favorite</Link></h3>
      </div>
    </nav>
  )
}
