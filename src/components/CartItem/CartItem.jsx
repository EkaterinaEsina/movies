export const CartItem = (props) => {
  const { 
    orderItem: { id, name, price, count }, 
    onChangeItemCount = () => null,
    onRemove = () => null,
  } = props;

  const decreaseBtn = (
    <button className="btn-small" disabled={count === 1} onClick={() => onChangeItemCount(id, 'decrease')}>-</button>
  );

  const increaseBtn = (
    <button className="btn-small" onClick={() => onChangeItemCount(id, 'increase')}>+</button>
  );

  return (
    <li id={id} className="collection-item ">
      {name} {decreaseBtn} x{count} {increaseBtn} by price {price}

      <span className="secondary-content" onClick={() => onRemove(id)}>
        <i className="material-icons icon">close</i>
      </span>
    </li>
  );
}