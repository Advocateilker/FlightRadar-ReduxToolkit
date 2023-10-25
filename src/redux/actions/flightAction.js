import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants";

export const getFlights=createAsyncThunk("getFlights", 
async ()=>{
    const res = await axios.request(options);
    const newFlight=res.data.aircraft.map((flight)=>({
        id:flight[0],
        code:flight[1],
        lat:flight[2],
        lng:flight[3]

    }))
    return newFlight
})