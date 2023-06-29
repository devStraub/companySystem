import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authenticated: true, //sessionStorage.getItem('user') ? true : false,
        user: sessionStorage.getItem('user')
    },
    reducers: {
        logIn: (state, action) => {
            state.authenticated = true
            state.user = action.payload
            sessionStorage.setItem('user', JSON.stringify(action.payload))
        },
        logOff: (state, action) => {
            state.authenticated = false
            state.user = null
            sessionStorage.removeItem('user')
        }
    }
})

export const { 
    logIn,
    logOff,  
} = authSlice.actions

export default authSlice.reducer