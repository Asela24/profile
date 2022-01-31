import {createSlice} from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(card => card.id !== action.payload )
        }
    }
});

export const{setItemInCart, deleteItemFromCart} = cardSlice.actions;
export default cardSlice.reducer;