import { createSlice } from '@reduxjs/toolkit'

export const leftSidebarSlice = createSlice({
    name: 'show-left-sidebar',
    initialState: {
        value: false
    },
    reducers: {
        showLeftSidebar: state => {
            state.value = true
        },
        closeLeftSidebar: state => {
            state.value = false
        }
    }
})

export const { showLeftSidebar, closeLeftSidebar } = leftSidebarSlice.actions

export default leftSidebarSlice.reducer