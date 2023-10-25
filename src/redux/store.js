import { configureStore } from "@reduxjs/toolkit";
import FlightSlice from "./slices/FlightSlice";




export default configureStore({
    reducer:FlightSlice
})