export const Cart = (props) => {
  const { quantity = 0, onCartOpened = () => null } = props;

  return (
    <div className="cart blue darken-4 white-text" onClick={onCartOpened}>
      <i className="material-icons">shopping_cart</i>
      {quantity && <span className="cart-quantity">{quantity}</span>}
    </div>
  )
}