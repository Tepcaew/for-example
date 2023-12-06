import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  lessons: [],
  lesson: {},
  loading: false,
  error: null,
};

export const getLessons = createAsyncThunk(
  "get/lessons",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/lessons");
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

export const getOneLesson = createAsyncThunk(
  "get/lesson",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/lessons/${id}`);
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

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLessons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLessons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getLessons.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.lessons = action.payload;
      })
      .addCase(getOneLesson.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOneLesson.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOneLesson.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.lesson = action.payload;
      });
  },
});

export default lessonsSlice.reducer;
