import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist' 
import storage from 'redux-persist/lib/storage' 
import { combineReducers } from '@reduxjs/toolkit'

import userReducer from "./slice/userSlice" // userReducer imported from userSlice

// combining the reducers
let rootReducer = combineReducers({  
    user: userReducer
})

// config to store
let persistConfig = {  
    key: 'root',
    storage,            
    whitelist: ['user'] 
}

let persistedReducer = persistReducer(persistConfig, rootReducer)

// declaring the redux store
let store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

// declaring persist store
let persist = persistStore(store)

// Export both store and persist store
export { store, persist }