import { createSlice } from "@reduxjs/toolkit";


const themeReducer = createSlice({
    name:'theme',
    initialState:{ isDark : undefined},
    reducers:{
     switchTheme :(state:any,action:any)=>{
        console.log('action',action)
        state.isDark = action.payload
     }
    }
})

export const { switchTheme } =themeReducer.actions;
export default themeReducer.reducer