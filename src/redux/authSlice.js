import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false

        },
        register: {
            isFetching: false,
            error: false,
            success: false
        },
        logout: {
            isFetching: false,
            error: false,
            success: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;

        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false
            state.login.currentUser = action.payload
            state.login.error = false

        },
        loginError: (state) => {
            state.login.isFetching = false
            state.login.error = true
        },
        registerStart: (state) => {
            state.register.isFetching = true;

        },
        registerSuccess: (state) => {
            state.register.isFetching = false
            state.register.success = true
            state.register.error = false

        },
        registerError: (state) => {

            state.register.isFetching = false
            state.register.error = true
            state.register.success = false

        },
        logoutStart: (state) => {

            state.logout.isFetching = true;

        },
        logoutSuccess: (state) => {
            state.logout.isFetching = false
            state.login.currentUser = null
            state.logout.success = true

        },
        logoutError: (state) => {
            state.logout.isFetching = false
            state.logout.error = true
            state.logout.success = false

        }
    }
})
export const { loginStart, loginSuccess, loginError,
    registerStart, registerSuccess, registerError,
    logoutError, logoutStart, logoutSuccess } =
    authSlice.actions

export default authSlice.reducer