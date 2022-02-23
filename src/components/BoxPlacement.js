import React from 'react';

export default function BoxPlacement(props) {

  let price
  if(props.price < 0.0001){
    price = props.price
  }else if(props.price < 1){
    price = props.price.toFixed(4)
  } else if(props.price < 100){
    price = props.price.toFixed(2)
  } else {
    price = props.price
  }

  return (
    <div className="crypto-box">
      <div className="crypto-top-info">
        <img className="crypto-image" alt={props.symbol} src={props.image} />
        <p className="crypto-price">{price}$</p>
      </div>
      <h3 className="crypto-name">{`${props.rank}. ${props.symbol.toUpperCase()}`}</h3>
    </div>
  );
}
