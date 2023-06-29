import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
    name: 'config',
    initialState: {
        navigationMode: 'monopage', // routes or monopage
        language: 'EN'
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export const { 
    setLanguage,
} = configSlice.actions

export default configSlice.reducer