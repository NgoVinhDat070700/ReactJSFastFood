import React, { useState } from "react";
import { Add, Delete, Remove } from "@material-ui/icons";
import "../assets/css/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseCart, removeFromCart } from "../redux/cartSlice";
import swal from "sweetalert";
import axios from "axios";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  console.log(cart)
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.qty;
  };
  const total = cart.reduce(addition, 0);
  const [paymentInput,setPaymentInput] = useState({
    address:'',
    phone:''
  })
  const handleInput=(e)=>{
    e.persist()
    setPaymentInput({...paymentInput,[e.target.name]:e.target.value})
  }
  const products = cart.map((item)=>{
    return {
    product_id:item.id,
    qty:item.qty
  }})
  console.log(products)
  const handlePayment = (e)=>{
    e.preventDefault()
    const formData = {
      userId:localStorage.getItem('user_id'),
      products:cart,
      amount:total,
      address:paymentInput.address,
      phone:paymentInput.phone,
      status:"pending"
    }
    axios.post('http://localhost:5000/api/order',formData).then(res=>{
      console.log('data',res.data)
        if(res.status===200)
        {
         swal('Success',res.data.message,'Success')
         localStorage.removeItem('cartItems')
         setPaymentInput({...paymentInput,
             address:'',
             phone:''
         })
        }
        else{
            swal("Error","Error")
            
        }
    })
  }
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
          </div>
        </div>
        <div className="summary">
            <h1 className="summary-title">Payment</h1>
            <form onSubmit={handlePayment} >
              <div className="form-payment">
                <label>Address:</label>
                <input type="text" className="input-address" name="address" onChange={handleInput} value={paymentInput.address} required />
              </div>
              <div className="form-payment">
                <label>Phone:</label>
                <input type="text" className="input-phone" name="phone" onChange={handleInput} value={paymentInput.phone} required/>
              </div>
              <button type="submit" className="botton-cart" style={{cursor:"pointer"}}>Payment</button>
            </form>
          </div>
      </div>
    </div>
  );
};
export default Cart;
