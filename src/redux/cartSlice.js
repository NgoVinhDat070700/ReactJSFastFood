import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex !== -1) {
        state.cartItems[existingIndex].qty = state.cartItems[existingIndex].qty +1;
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        
        state.cartItems.push(action.payload);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].qty > 1) {
        state.cartItems[itemIndex].qty -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else {
        state.cartItem[itemIndex].qty = 1
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;