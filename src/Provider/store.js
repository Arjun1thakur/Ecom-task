import { configureStore } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import ProductSlice from "./ProductSlice";
import SingleProductSlice from "./SingleProductSlice";

const store = configureStore({
    reducer:{
       Product:ProductSlice,
       singleProduct:SingleProductSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
        serializableCheck: false,
    })
})

export default store
