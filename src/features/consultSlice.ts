import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  consults: [],
  loading: false,
  error: null,
};

export const getConsult = createAsyncThunk(
  "get/consult",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/consult");
      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addConsults = createAsyncThunk(
  "/consult",
  async (
    { consultName, consultNumber, consultMail, consultOrganization },
    thunkAPI
  ) => {
    try {
      const res = await fetch("http://localhost:4000/consult", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          consultName,
          consultNumber,
          consultMail,
          consultOrganization,
        }),
      });
      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const consultSlice = createSlice({
  name: "consults",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addConsults.fulfilled, (state, action) => {
        state.consults.push(action.payload);
      })
      .addCase(getConsult.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getConsult.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getConsult.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.consults = action.payload;
      });
  },
});

export default consultSlice.reducer;
