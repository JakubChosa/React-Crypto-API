import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Main from './pages/Main'
import ErrorPage from './pages/ErrorPage'
import CryptoDetails from './pages/CryptoDetails'


export default function App() {
  const [cryptocurrencies, setCryptocurrencies] = React.useState([])
  const [error, setError] = React.useState(false)

  React.useEffect(()=> {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
    fetch(url)
      .then(res => {
        if(!res.ok){
          throw Error('could not fetch data')
        }
        return res.json()
      })
      .then(data => {
        setError(null)
        setCryptocurrencies(data)
      })
      .catch(err => {
        setError(err.message)
      })
    },[])

  return (
    <div className="App">
      <Navbar />
      {error && <ErrorPage />}
      <Routes>
        <Route path="/React-Crypto-API"
          element={<Main cryptocurrencies={cryptocurrencies} />}>
        </Route>
        <Route path="/React-Crypto-API/:cryptoId"
          element={<CryptoDetails />}
        />
      <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}
