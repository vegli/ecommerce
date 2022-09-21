import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,  //broj proizvoda u korpi
        total:0,
    },
    reducers:{
        addProduct:(state,action)=> {
            state.quantity += 1; // broj proizvoda u korpi
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity; // broj za pojedinacni proizvod (5 miseva npr)
        },
    },
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;