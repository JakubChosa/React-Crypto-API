import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}){
  const [cryptocurrencies, setCryptocurrencies] = useState('')
  const [favoriteCryptocurrencies, setFavoriteCryptocurrencies] = useState(null)
  const [error, setError] = useState(false)

  useEffect(()=> {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
    fetch(url)
      .then(res => {
        if(!res.ok){
          throw Error('could not fetch data')
        }
        return res.json()
      })
      .then(data => {
        setError(null)
        const dataWithFavorite = data.map(crypto => {
          return {...crypto, isFavorite: false}
        })
        setCryptocurrencies(dataWithFavorite)
      })
      .catch(err => {
        setError(err.message)
      })
  },[])

  useEffect(()=> {
    if(cryptocurrencies){
      const newArray = cryptocurrencies.filter(crypto => crypto.isFavorite)
      setFavoriteCryptocurrencies(newArray)
    }
  },[cryptocurrencies])

  function toggleFavorite(event, id) {
    event.preventDefault()
      setCryptocurrencies(prevState => prevState.map(crypto => {
          if(crypto.id === id) {
              return {...crypto,isFavorite: !crypto.isFavorite}
          }
          return crypto
      }))
  }

  return(
    <Context.Provider value={{cryptocurrencies, error, toggleFavorite, favoriteCryptocurrencies}}>
      {children}
    </Context.Provider>
  )
}
export {ContextProvider, Context}
