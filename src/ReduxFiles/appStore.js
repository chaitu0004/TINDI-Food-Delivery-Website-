import { configureStore } from "@reduxjs/toolkit";

import { cartReducer }from "./cartSlice";



const appStore=configureStore(
{
    reducer:{
        cartContainer:cartReducer,
    }

});

export default appStore;