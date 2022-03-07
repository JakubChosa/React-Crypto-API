import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Main from './pages/Main'
import ErrorPage from './pages/ErrorPage'
import Favorite from './pages/Favorite'
import CryptoDetails from './pages/CryptoDetails'

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/React-Crypto-API"
          element={<Main />}>
        </Route>
        <Route path="/React-Crypto-API/:cryptoId"
          element={<CryptoDetails />}
        />
        <Route path="/React-Crypto-API/favorite"
         element={<Favorite />}
        />
        <Route path="/React-Crypto-API/favorite/:cryptoId"
         element={<CryptoDetails />}
        />
      <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}
