import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allData: [],
};

const slicer = createSlice({
    name: "slicer",
    initialState,
    reducers: {
        tempUpData: (state, action) => {
            const actionData = action.payload;
            state.allData = actionData;
        },
    },
});

// Destructuring to get the action creator
export const { tempUpData } = slicer.actions;
export default slicer.reducer;
