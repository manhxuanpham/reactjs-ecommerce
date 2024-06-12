import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        productItem: null,

    },
    reducers: {

        search: (state, action) => {
            state.productItem = action.payload
        }

    }
})
export const { search } = searchSlice.actions

export default searchSlice.reducer