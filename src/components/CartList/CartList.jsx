import { useContext } from 'react';

import { CartItem } from "../CartItem/CartItem";
import { ShopContext } from '../../Сontext/ShopContext';

export const CartList = (props) => {
  const { order, isCartOpened, openCart, closeCart } = useContext(ShopContext);

  const totalPrice = order.length 
    ? order.reduce((acc, item) => acc + item.price * item.count, 0) 
    : 0;

  if (!isCartOpened) {
    return null;
  }

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">
        Корзина

        <span className="secondary-content" onClick={isCartOpened ? closeCart : openCart}>
          <i className="material-icons icon">close</i>
        </span>
      </li>

      {order.length 
        ? order.map((orderItem) => <CartItem orderItem={orderItem} key={orderItem.id} />)
        : <li className="collection-item">Корзина пуста</li>
      }

      <li className="collection-item active">
        Общая стоимость: {totalPrice}
      </li>

      <li className="collection-item">
        <button className="secondary-content btn-small">Оформить</button>
      </li>
    </ul>
  )
}