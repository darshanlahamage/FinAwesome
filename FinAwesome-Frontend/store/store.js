import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "./historySlice"; 
import offerReducer from "./offerSlice";
import userReducer from "./userSlice";
import cartReducer from './cartSlice'

export default configureStore({
    reducer: {
        //Name of slice: Name of Object
        history: historyReducer,
        user: userReducer,
        offer:offerReducer,
        cart: cartReducer
    }
})


