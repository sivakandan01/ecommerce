import { createSlice } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slice/userSlice"

let initialState = {
    userData: {}
}

let userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload
        }
    }
})

export let { setUser } = userSlice.actions

let store = configureStore({
    reducer:{
        user: userReducer
    }
})

export default store
