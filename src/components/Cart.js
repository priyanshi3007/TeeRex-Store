import React from 'react';
import { useProductContext } from '../context/ProductContext';
import NavBar from './Navbar';
import '../Styles/styles.css';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeItem, clearCart } = useProductContext();

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
        <NavBar/>

       <div className='cart'> 
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <div>
         
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.imageURL} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 {item.name}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity: {item.quantity}
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Amount: ${getTotalAmount().toFixed(2)}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      ) : (
        <p>No products in the cart.</p>
      )}
      </div>
    </>
  );
};

export default Cart;
