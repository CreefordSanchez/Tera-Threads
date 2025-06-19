import { useState } from 'react';
import CartItem from '../Compoment/CartItem';
import { motion } from "motion/react"

function Cart(props) {
  const [showDialog, setShowDialog] = useState(false);

  let total = 0;
  props.cart.forEach(item => {
    total += item.price * item.quantity;
  });

  return (
    <motion.div className="cart-container"
    initial={{opacity: 0, y: -30}}
    animate={{opacity: 1, y: 0}}
    transition={{duration:0.5, ease:'easeOut'}}>
      <h1>Shopping Cart</h1>
      <div className="list-container">
        {props.cart.map(item => (
          <CartItem key={item.id} item={item} dispatch={props.dispatch} />
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
    </motion.div>
  );
}

export default Cart;
