import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import cartReducer from './cartSlice'
import checkoutReducer from './checkoutSlice'
import userAddressReducer from './userAddressSlice'
import searchReducer from './searchSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { List } from 'antd'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    // whitelist: ['auth', 'cart', 'userAddress','checkout' ],
    // blacklist:['cart']
}
const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    userAddress: userAddressReducer,
    search:searchReducer

})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store)

