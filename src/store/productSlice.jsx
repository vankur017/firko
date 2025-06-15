import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'prodcutlist',
    initialState: {
        items: []
    },
    reducers:{
        addProduct:(state,action)=>{
            state.items.push(action.payload)
        }
    }

})

export const {addProduct} = productSlice.actions
export default productSlice.reducer