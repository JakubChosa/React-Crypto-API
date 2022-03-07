import React from 'react';
import {useParams} from "react-router-dom"
import ErrorPage from './ErrorPage'
import DisplayCryptoDetails from "../components/DisplayCryptoDetails"

export default function CryptoDetailedInfo() {
  const { cryptoId } = useParams()
  const [crypto, setCrypto] = React.useState(null)
  const [error, setError] = React.useState(false)

  React.useEffect(()=> {
   const urlId = `https://api.coingecko.com/api/v3/coins/${cryptoId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
   fetch(urlId)
     .then(res => {
           if(!res.ok){
             throw Error('could not fetch data')
           }
           return res.json()
         })
     .then(data => {
       setCrypto(data)
       setError(null)
     }).catch(err => {
           setError(err.message)
         })
   },[cryptoId])

  return (
    <main>
      {error && <ErrorPage />}
      {!crypto && !error && <h2 className="loading">Loading...</h2>}
      {crypto && <DisplayCryptoDetails crypto={crypto} />}
    </main>
  )
}
