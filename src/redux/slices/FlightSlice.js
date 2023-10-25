import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightAction";

const initialState = {
    flights: [],
    isLoading: true,
    isError: false,
    route: []
}

const flightSlice = createSlice({
    name: "flights",
    initialState,
    reducers: {
        setRoute: (state, action) => {
            const data = action.payload.map((i) => ([i.lat, i.lng]))
            state.route = data;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getFlights.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getFlights.fulfilled, (state, action) => {
            state.flights = action.payload;
            state.isLoading = false;
            state.isError = false;
        })
        builder.addCase(getFlights.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })

    }
})

export const { setRoute } = flightSlice.actions

export default flightSlice.reducer