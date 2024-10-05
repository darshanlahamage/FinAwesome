import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: 'history',
    initialState: {
        items:[]
    },
    reducers: {
        addHistoryItem: (state, action) => {
            // console.log(action.payload.item)
            state.items.push(action.payload)
        },
    }
})

//Reducer function action imported
export const { addHistoryItem } = historySlice.actions;
export default historySlice.reducer;