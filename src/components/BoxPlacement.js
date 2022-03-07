import React, {useContext} from 'react'
import {Context} from '../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function BoxPlacement(props) {
  const {toggleFavorite} = useContext(Context)

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
  const styles = {color: props.isFavorite ? '#fec834' : '#808080'}
  return (
    <div className="crypto-box">
      <div className="crypto-box--top">
        <img className="crypto-box--image" alt={props.symbol} src={props.image} />
        <p className="crypto-box--price">{price}$</p>
      </div>
      <h3 className="crypto-box--name">{`${props.rank}. ${props.symbol.toUpperCase()}`}</h3>
      <FontAwesomeIcon
        onClick={(event) => toggleFavorite(event, props.id)}
      className="crypto-box--icon" style={styles} icon={ faStar }/>
    </div>
  );
}
