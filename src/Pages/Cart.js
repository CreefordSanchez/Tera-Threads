import { useState } from 'react';
import CartItem from '../Compoment/CartItem';

function Cart({ cart, dispatch }) {
  const [showDialog, setShowDialog] = useState(false);

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="list-container">
        {cart.map(item => (
          <CartItem key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${total.toFixed(2)}</h2>
        <button onClick={() => setShowDialog(true)}>Checkout</button>
      </div>
      {showDialog && (
        <div className="dialog-box">
          <h3>Select Payment Method</h3>
          <ul>
            <li>Credit Card</li>
            <li>Debit Card</li>
            <li>Other</li>
          </ul>
          <button onClick={() => setShowDialog(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
