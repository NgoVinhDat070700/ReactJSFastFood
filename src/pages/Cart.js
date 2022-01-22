import React from "react";
import { Add, Remove } from "@material-ui/icons";
import '../assets/css/cart.css'
const Cart = () => {
  return (
    <div className="container-cart">
      <div className="cart-wrapper">
        <h1 className="cart-title">Your Bag</h1>
        <div className="top">
          <button className="botton-cart">Continue Shopping</button>
        </div>
        <div className="cart-bottom">
          <div className="cart-info">
            <div className="cart-product">
              <div className="product-detail">
                <img className="img-product-cart" src="" />
                <div className="detail">
                  <div className="name-product">
                    <b>Name Product</b>
                  </div>
                </div>
              </div>
              <div className="product-price">
                <div className="product-amount">
                  <Add />
                  <div className="amount">Số lượng</div>
                  <Remove />
                </div>
                <div className="price-prod">
                  Giá
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="summary">
            <h1 className="summary-title">Order Summary</h1>
            <div className="summary-item">
              <div className="item-text">Subtotal</div>
              <div className="item-price">Giá</div>
            </div>
            <div className="summary-item">
              <div className="item-text">Subtotal</div>
              <div className="item-price">Giá</div>
            </div>
            <div className="summary-item">
              <div className="item-text">Subtotal</div>
              <div className="item-price">Giá</div>
            </div>
            <div className="summary-item">
              <div className="item-text">Subtotal</div>
              <div className="item-price">Giá</div>
            </div>
            <button className="botton-cart">Checkout Now</button>
          </div>
        </div>
      </div>  
    </div>
  ) 
};
export default Cart
