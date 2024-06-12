import { createSlice } from "@reduxjs/toolkit";

const userAddressSlice = createSlice({
    name: "userAddress",
    initialState: {
        user_address: {
            name:"",
            numberPhone:"",
            address:""
        },


    },
    reducers: {

        updateAddress: (state, action) => {
            state.user_address = action.payload
            
        }

    }
})
export const { updateAddress } = userAddressSlice.actions

export default userAddressSlice.reducer