import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    showSplash: true,
    theme: 'light',
}

const appSlice = createSlice ({
    name:'app',
    initialState,
    reducers:{
        hideSplash: (state) =>{
            state.showSplash = false
        },
        toggleTheme : (state) => {
            state.theme = 'dark'
        }
    }
})

export const {hideSplash , toggleTheme} = appSlice.actions
export default appSlice.reducer