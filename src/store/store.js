import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slice/userSlice"

let store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store