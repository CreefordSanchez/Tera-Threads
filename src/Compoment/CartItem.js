import { FaTrash } from 'react-icons/fa';

function CartItem(props) {
  const updateQuantity = (change) => {
    let newQty = props.item.quantity + change;
    if (newQty < 1) newQty = 1;
    props.dispatch({ type: 'UPDATE_QUANTITY', payload: { id: props.item.id, quantity: newQty } });
  };

  const removeItem = () => {
    props.dispatch({ type: 'REMOVE_ITEM', payload: { id: props.item.id } });
  };

  return (
    <div className="item-card">
      <img src={props.item.image} alt={props.item.title} className="cart-item-img" />
      <div className="item-info">
        <h3>{props.item.title}</h3>
        <p>{props.item.description}</p>
        <div className="quantity-control">
          <button onClick={() => updateQuantity(-1)}>-</button>
          <span>{props.item.quantity}</span>
          <button onClick={() => updateQuantity(1)}>+</button>
        </div>
        <div className="price">${(props.item.price * props.item.quantity).toFixed(2)}</div>
        <button onClick={removeItem}><FaTrash /></button>
      </div>
    </div>
  );
}

export default CartItem;
