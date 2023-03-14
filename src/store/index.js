import { configureStore } from "@reduxjs/toolkit";
import{
    carsReducer,addCar,removeCar,changeSearchTerm
} from './slices/carsSlice';
import {
    formReducer,changeName,changeCost
} from './slices/formSlice';

import { bikeFormReducer,changeBikeName,changeBikeCost } from "./slices/formBikeSlice";

const store = configureStore({
    reducer:{
        cars:carsReducer,
        form:formReducer,
        bikeForm:bikeFormReducer
    }
});

export {
    store,
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm,
    changeBikeName,
    changeBikeCost
}
