import React, {useContext} from 'react'
import {Context} from '../Context'
import BoxPlacement from "../components/BoxPlacement"
import { Link } from "react-router-dom"
import ErrorPage from './ErrorPage'

export default function Main(props) {
  const {favoriteCryptocurrencies, error} = useContext(Context)
  const [searchApi, setSearchApi] = React.useState('')

  function searchChange(e){
        const {value} = e.target
        setSearchApi(value)
  }

  let cryptoElements
  if(favoriteCryptocurrencies){
    cryptoElements = favoriteCryptocurrencies.map(crypto => (
      <Link key={crypto.symbol} to={`/React-Crypto-API/favorite/${crypto.id}`}>
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

  const favoriteTitle = favoriteCryptocurrencies.length > 0 ? "Your favorite major cryptocurrencies" :
  "You don't have any favorites yet, go to main page and add some by clicking on star"

  return (
    <main>

      <div className="text-container">
        <h2 className="heading">{favoriteTitle}</h2>
      </div>
      <div className="container">
        {error && <ErrorPage />}
        {!favoriteCryptocurrencies && !error && <h2 className="loading">Loading...</h2>}
        {cryptoElements}
      </div>
      <div className="text-container">
        <h2 className="heading">Search small cryptocurrency that you like</h2>
        <div className="crypto-search">
          <input
            type="text"
            name="searchApi"
            placeholder="singularitynet"
            value={searchApi}
            onChange={searchChange}
          />
          <Link
            className="crypto-search-btn"
            key={crypto.symbol}
            to={`/React-Crypto-API/favorite/${searchApi}`}>Search
          </Link>
        </div>
      </div>
    </main>
  );
}
