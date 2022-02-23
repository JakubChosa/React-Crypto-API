import React from 'react';
import {useNavigate} from "react-router-dom"

export default function DisplayCryptoDetails(props) {
  const navigate = useNavigate()
  const {crypto} = props

  const gains = crypto.market_data.price_change_24h > 0 ? '🔥' : '🌧'
  const styles = {color: crypto.market_data.price_change_24h > 0 ? '#00b300' : '#e60000'}
  const marketCapFormatted = crypto.market_data.market_cap.usd.toLocaleString(undefined, {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
  })

  let priceChangeFormat
  if(crypto.market_data.current_price.usd < 1){
    priceChangeFormat = 4
  } else if (crypto.market_data.current_price.usd > 500){
    priceChangeFormat = 2
  } else {
    priceChangeFormat = 3
  }

  return (
      <div className="crypto-details">
        <button className="go-back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <img src={crypto.image.large} alt={crypto.name}
          className="crypto-details-image"
        />
        <div className="top-details-wrapper">
          <p>market cap rank:
            <span className="important-text">{` ${crypto.market_cap_rank}`}</span>
          </p>
          <p>market cap:
            <span className="important-text"><br />{` ${marketCapFormatted}$`}</span>
          </p>
          <p>ath:
            <span className="important-text">{` ${crypto.market_data.ath.usd}$`}
              <span className="ath_change_percentage">{`${crypto.market_data.ath_change_percentage.usd.toFixed(2)}%`}</span>
            </span>
          </p>
        </div>

        <h2 className="crypto-details-name">{crypto.name}</h2>

        <div className="bottom-details-wrapper">
          <p>24h-high🡹:
            <span className="important-text">{` ${crypto.market_data.high_24h.usd}$`}</span>
          </p>
          <p>Price:
            <span style={styles} className="important-text">{` ${crypto.market_data.current_price.usd}$`}</span>
          </p>
          <p>24h-low🡻:
            <span className="important-text">{` ${crypto.market_data.low_24h.usd}$`}</span>
          </p>
        </div>
        <p className="price-change">Daily price change $:
          <span style={styles} className="important-text">{` ${crypto.market_data.price_change_24h.toFixed(priceChangeFormat)}`}</span>
          <span className="icons">{gains}</span>
        </p>
        <p className="price-change">Daily price change by %:
          <span style={styles} className="important-text">{` ${crypto.market_data.price_change_percentage_24h.toFixed(2)}`}</span>
          <span className="icons">{gains}</span>
        </p>

      </div>
  )
}
