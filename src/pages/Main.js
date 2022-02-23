import React from 'react'
import BoxPlacement from "../components/BoxPlacement"
import { Link } from "react-router-dom"

export default function Main(props) {
  const { cryptocurrencies } = props

  const cryptoElements = cryptocurrencies.map(crypto => (
    <Link key={crypto.symbol} to={`/${crypto.id}`}>
      <BoxPlacement
        rank={crypto.market_cap_rank}
        symbol={crypto.symbol}
        price={crypto.current_price}
        image={crypto.image}
      />
    </Link>
  ))

  return (
    <main>
      <div className="container">
        {cryptoElements}
      </div>
    </main>
  );
}
