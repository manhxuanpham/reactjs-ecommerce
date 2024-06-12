import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItem: [],
        
    },
    reducers: {
        addToCartSuccess: (state, action) => {
            state.cartItem.push(action.payload);
        },
        getCart: (state, action) => {
            state.cartItem = action.payload
        },
         removeItemFromCart(state, action) {
            state.cartItem = state.cartItem.filter(item => item.product_id !== action.payload);
        }
    }
})
export const { getCart, removeItemFromCart, addToCartSuccess } = cartSlice.actions

export default cartSlice.reducer