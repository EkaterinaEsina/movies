import { useContext } from 'react';

import { ShopContext } from '../../Сontext/ShopContext';

export const ShopItem = ({ item }) => {
  const { 
    id, 
    name,
    description, 
    price,
    full_background
  } = item;

  const { setItemToOrder } = useContext(ShopContext);

  const defaultPosterSrc = !full_background 
    ? `https://via.placeholder.com/300x250?text=${name}`
    : full_background;

  return (
    <div className="card">
      <div className="card-image">
        <img alt={name} src={defaultPosterSrc} onClick={() => null}/>
      </div>
      
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>

      <div className="card-action">
        <button
          className="btn"
          onClick={() => setItemToOrder({ id, name, price, description })}
        >
          Купить
        </button>

        <span className="right">{price}</span>
      </div>
    </div>
  );
}