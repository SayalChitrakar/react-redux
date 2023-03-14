import { createSlice } from "@reduxjs/toolkit";

const bikeFormSlice = createSlice({
    name:'bikeForm',
    initialState:{
        name:'',
        cost:0
    },
    reducers:{

        changeBikeName(state,action){

            state.name = action.payload;
        },
        changeBikeCost(state,action){
            state.cost = action.payload;
        }
    }
});

export const {changeBikeName,changeBikeCost} = bikeFormSlice.actions;
export const bikeFormReducer = bikeFormSlice.reducer;

console.log(bikeFormReducer);