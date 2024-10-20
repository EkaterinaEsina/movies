import { CartItem } from "../CartItem/CartItem";

export const CartList = (props) => {
  const { 
    order = [], 
    onCartOpened = () => null, 
    onChangeItemCount = () => null, 
    onRemoveItem = () => null,
  } = props;

  const totalPrice = order.length 
    ? order.reduce((acc, item) => acc + item.price * item.count, 0) 
    : 0;

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">
        Корзина

        <span className="secondary-content" onClick={onCartOpened}>
          <i className="material-icons icon">close</i>
        </span>
      </li>

      {order.length 
        ? order.map((orderItem) => (
          <CartItem
            orderItem={orderItem}
            key={orderItem.id}
            onChangeItemCount={onChangeItemCount}
            onRemove={onRemoveItem}
          />
        ))
        : (
          <li className="collection-item">Корзина пуста</li>
        )
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