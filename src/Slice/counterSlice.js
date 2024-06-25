import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addCart: (state, action) => {
    //   const existingItem = state.cartItems.find(item => item.id === action.payload.id);
    //   if (existingItem) {
    //     existingItem.quantity += action.payload.quantity;
    //     existingItem.totalPrice += action.payload.quantity * action.payload.price;
    //   } else {
    //     state.cartItems.push({
    //       ...action.payload,
    //       totalPrice: action.payload.quantity * action.payload.price
    //     });
    //   }
    //   state.totalQuantity += action.payload.quantity;
    //   state.totalPrice += action.payload.quantity * action.payload.price;
    // },
    
  },
})

// Action creators are generated for each case reducer function
export const { addCart } = cartSlice.actions

export default cartSlice.reducer
