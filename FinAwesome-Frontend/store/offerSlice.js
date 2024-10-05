import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
    name: 'offers',
    initialState: {
        items:[],
        
    },
    reducers: {
        setOffers: (state, action) => {
            // console.log(action.payload.item)
            state.items = action.payload;
        },
    }
})

//Reducer function action imported
export const { setOffers } = offerSlice.actions;
export default offerSlice.reducer;