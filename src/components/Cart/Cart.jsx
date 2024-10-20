import { useContext } from 'react';
import { ShopContext } from '../../Сontext/ShopContext';

export const Cart = (props) => {
  const { order, isItemsLoading, isCartOpened, openCart, closeCart } = useContext(ShopContext);

  if (isItemsLoading) {
    return null;
  }

  return (
    <div className="cart blue darken-4 white-text" onClick={isCartOpened ? closeCart : openCart}>
      <i className="material-icons">shopping_cart</i>
      {order.length && <span className="cart-quantity">{order.length}</span>}
    </div>
  )
}