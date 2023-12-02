import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  programs: [],
  program: {},
  loading: false,
  error: null,
};

export const getPrograms = createAsyncThunk(
  "get/programs",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/programs");
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

export const getOneProgram = createAsyncThunk(
  "get/program",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/programs/${id}`);
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

export const programsSlice = createSlice({
  name: "programs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrograms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPrograms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPrograms.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.programs = action.payload;
      })
      .addCase(getOneProgram.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOneProgram.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOneProgram.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.program = action.payload;
      });
  },
});

export default programsSlice.reducer;
