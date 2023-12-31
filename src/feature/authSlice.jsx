import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState, //datanın tutulacağı yer

    reducers: {
        // buradaki setUser fonc. initialState içindeki userı update edecek.
        setuser: (state, action) => {
            state.user = action.payload;
        },
        setDelUser: (state) => {
            state.user = "";
        },
    },
});

export const { setuser, setDelUser } = authSlice.actions;

export default authSlice.reducer;
