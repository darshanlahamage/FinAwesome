import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:'',
    email:''
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo(state, action){
            const {name,email} = action.payload;
            state.name=name;
            state.email =email;
        },
        logout: (state)=>{
            state.name='';
            state.email ='';
        }
    }
})

//Reducer function action imported
export const { setUserInfo , logout} = userSlice.actions;
export default userSlice.reducer;