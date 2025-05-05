import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    token: ""
}

let AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export let { setToken } = AuthSlice.actions
export default AuthSlice.reducer