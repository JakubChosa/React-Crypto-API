import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import BoxPlacement from "../components/BoxPlacement"
import { Link } from "react-router-dom"
import ErrorPage from './ErrorPage'

export default function Main() {
  const {cryptocurrencies, error} = useContext(Context)
  const [cryptoSearch, setCryptoSearch] = useState('')
  
  function searchChange(e){
        const {value} = e.target
        setCryptoSearch(value)
  }

  let cryptoElements
  if(cryptocurrencies.length > 0){
    cryptoElements = cryptocurrencies.filter(crypto => {
    if(cryptoSearch === ''){
      return crypto
    } else if(crypto.symbol.includes(cryptoSearch.toLowerCase()) ||
      crypto.id.includes(cryptoSearch.toLowerCase())){
      return crypto
    }
  }).map(crypto => (
      <Link key={crypto.id} to={`/React-Crypto-API/${crypto.id}`}>
        <BoxPlacement
          id={crypto.id}
          isFavorite={crypto.isFavorite}
          rank={crypto.market_cap_rank}
          symbol={crypto.symbol}
          price={crypto.current_price}
          image={crypto.image}
        />
      </Link>
    ))
  }
  return (
    <main>
     <div className="text-container">
       <h2 className="heading">Search cryptocurrency you like!</h2>
       <input
         type="text"
         name="cryptoSearch"
         placeholder="bitcoin | btc"
         value={cryptoSearch}
         onChange={searchChange}
       />
     </div>
     {error && <ErrorPage />}
     {cryptocurrencies.length < 1 && !error && <h2 className="loading">Loading...</h2>}
     {!cryptocurrencies && <h2 className="loading">Loading...</h2>}
     <div className="container">
       {cryptoElements}
     </div>
   </main>
  );
}
