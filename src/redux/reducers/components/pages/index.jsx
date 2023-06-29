import { createSlice } from '@reduxjs/toolkit'

import Home from '../../../../components/pages/home'

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        value: <Home/>
    },
    reducers: {
        setPage: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setPage } = pageSlice.actions

export default pageSlice.reducer