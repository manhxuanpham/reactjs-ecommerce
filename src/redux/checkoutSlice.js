import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: {
        checkoutItem: null,

    },
    reducers: {

        getCheckout: (state, action) => {
            state.checkoutItem = action.payload
        }

    }
})
export const { getCheckout } = checkoutSlice.actions

export default checkoutSlice.reducer