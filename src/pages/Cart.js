import React from "react";
import { Add, Delete, Remove } from "@material-ui/icons";
import "../assets/css/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseCart, removeFromCart } from "../redux/cartSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.qty;
  };
  const total = cart.reduce(addition, 0);
  return (
    <div className="container-cart">
      <div className="cart-wrapper">
        <h1 className="cart-title">Your Bag</h1>
        <div className="top">
          <button className="botton-cart">Continue Shopping</button>
        </div>
        <div className="cart-bottom">
          <div className="cart-info">
            {cart.map((item) => (
              <div key={item.id}>
                <div className="cart-product">
                  <div className="product-detail">
                    <img className="img-product-cart" src={`http://localhost:5000/uploads/${item.image}`} />
                    <div className="detail">
                      <div className="name-product">
                        <b>{item.nameproduct}</b>
                      </div>
                    </div>
                  </div>
                  <div className="product-price">
                    <div className="product-amount" style={{cursor:"pointer"}}>
                      <Add onClick={()=>dispatch(addToCart(item))} />
                      <div className="amount">{item.qty}</div>
                      <Remove onClick={()=>dispatch(decreaseCart(item))} />
                    </div>
                    <div className="price-prod">{item.price} VNĐ</div>
                    <Delete style={{fontSize:50, cursor:"pointer"}} onClick={()=>dispatch(removeFromCart(item))} />
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="summary">
            <h1 className="summary-title">Order Summary</h1>
            <div className="summary-item">
              <div className="item-text">Subtotal</div>
              <div className="item-price">{total} VNĐ</div>
            </div>
            <button className="botton-cart" style={{cursor:"pointer"}}>Checkout Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
