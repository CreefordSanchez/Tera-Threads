import { FaTrash } from 'react-icons/fa';

function CartItem({ item, dispatch }) {
  const updateQuantity = (change) => {
    let newQty = item.quantity + change;
    if (newQty < 1) newQty = 1;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: newQty } });
  };

  const removeItem = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } });
  };

  return (
    <div className="item-card">
      <img src={item.image} alt={item.title} className="cart-item-img" />
      <div className="item-info">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="quantity-control">
          <button onClick={() => updateQuantity(-1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(1)}>+</button>
        </div>
        <div className="price">${(item.price * item.quantity).toFixed(2)}</div>
        <button onClick={removeItem}><FaTrash /></button>
      </div>
    </div>
  );
}

export default CartItem;
