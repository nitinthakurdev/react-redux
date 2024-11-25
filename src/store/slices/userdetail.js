import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
    "createUser",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("http://localhost:4200/users", data);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getUser = createAsyncThunk("getUser", async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get("http://localhost:4200/users");
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});


const userDetails = createSlice({
    name: "usersDetails",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload ;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userDetails.reducer;
