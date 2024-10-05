import  {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },

    reducers:{
        addItemToCart:(state,action)=>{
            const item = action.payload;
            const existingItem = state.items.find(cardItem => cardItem.id ===item);

            if(existingItem){
                existingItem.quantity +=1;
            }else{
                state.items.push({...item,quantity:1})
            }
        },
        removeItemFromCart:(state,action)=> {
             const itemId = action.payload;
             state.items = state.items.filter(item => item.id!== itemId);

        },
        clearCart:(state)=>{
            state.items = [];
        }
    }
});

export const {addItemToCart,removeItemFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;