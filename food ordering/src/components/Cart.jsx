import { useContext } from 'react';

import Modal from './UI/Modal.jsx';
import CartContext from '../context/CartContext.jsx';
import Button from './UI/Button.jsx';
import { currencyFormatter } from '../util/formatting.js';
import UserProgressContext from '../context/UserProgressContext.jsx';
import CartItem from './CartItem.jsx';

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
    
  }
  const handleCheckout=()=>{
    userProgressCtx.showCheckout()
  }
  console.log('userProgressCtx.progress ', userProgressCtx.progress ==='cart')
  return (
    <>
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
            purpose='cart'
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCheckout}>Go to Checkout</Button>
      </p>
    </Modal>

    {/* -------------- checkout ------------- */}
    <Modal className="cart" open={userProgressCtx.progress === 'checkout'}>
      <h2>Checkout Your Items</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
           purpose='checkout'
          />
        ))}
      </ul>
      <p className="cart-total">Total to be paid :-<span style={{color:'green'}}> {currencyFormatter.format(cartTotal)}</span> </p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Cancel
        </Button>
        <Button onClick={handleCheckout}>Buy now</Button>
      </p>
    </Modal>
    </>
  );
}