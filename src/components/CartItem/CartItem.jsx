import { useContext } from 'react';
import { ShopContext } from '../../Сontext/ShopContext';

export const CartItem = (props) => {
  const { orderItem: { id, name, price, count } } = props;

  const { removeItemFromOrder, increaseItemCount, decreaseItemCount } = useContext(ShopContext);

  const decreaseBtn = (
    <button className="btn-small" disabled={count === 1} onClick={() => decreaseItemCount(id)}>-</button>
  );

  const increaseBtn = (
    <button className="btn-small" onClick={() => increaseItemCount(id)}>+</button>
  );

  return (
    <li id={id} className="collection-item">
      {name} {decreaseBtn} x{count} {increaseBtn} by price {price}

      <span className="secondary-content" onClick={() => removeItemFromOrder(id)}>
        <i className="material-icons icon">close</i>
      </span>
    </li>
  );
}