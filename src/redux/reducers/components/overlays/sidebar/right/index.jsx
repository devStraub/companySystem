import { createSlice } from '@reduxjs/toolkit'

export const rightSidebarSlice = createSlice({
    name: 'show-right-sidebar',
    initialState: {
        value: false
    },
    reducers: {
        showRightSidebar: state => {
            state.value = true
        },
        closeRightSidebar: state => {
            state.value = false
        }
    }
})

export const { showRightSidebar, closeRightSidebar } = rightSidebarSlice.actions

export default rightSidebarSlice.reducer