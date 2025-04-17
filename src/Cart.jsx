import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button, Container } from "react-bootstrap";
import "./Cart.css";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

 
  const totalSum = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 10.0;
  const finalTotal = totalSum + shipping;

  return (
    <div className="cart-container-wrapper">
    <div className="cart-container">
      <h2 className="text-center" style={{fontSize:"50px",color:"#778899"}}>ORDERS</h2>
     
      {cart.length === 0 ? (
        <p className="text-center empty-cart">Cart is empty!!!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.title} className="item-image" />
                <div className="item-details">
                  <p>{item.title}</p>
                  <span>Delivery 24th July</span>
                </div>
                <div className="item-quantity">
                  <Button style={{color:"black",backgroundColor:"white", border:"1px solid #778899"}} onClick={() => removeFromCart(item.id)}>-</Button>
                  <span>{item.qty}</span>
                  <Button style={{color:"white",backgroundColor:"#778899", border:"1px solid #778899"}} onClick={() => addToCart(item)}>+</Button>
                </div>
                <p className="item-price">${(item.price * item.qty).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Subtotal <span>${totalSum.toFixed(2)}</span></p>
            <p>Shipping <span>${shipping.toFixed(2)}</span></p>
            <p className="total">Total <span>${finalTotal.toFixed(2)}</span></p>
          </div>
          <button className="checkout-button" style={{color:"white",backgroundColor:"#778899", border:"1px solid #778899"}}>BUY NOW</button>
        </>
      )}
    </div>
    </div>
  );
};
export default Cart;
