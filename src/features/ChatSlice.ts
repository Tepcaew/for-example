import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

export const getMessages = createAsyncThunk(
  "get/message",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/chat");
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

export const pushOnBackMessages = createAsyncThunk(
  "/saveCHAT",
  async ({ messages1 }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/chat", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(
          messages1,
        ),
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
export const addMessages = createAsyncThunk(
  "add/Messages",
  async (text, thunkAPI) => {
    // const token = thunkAPI.getState().application.token;
    console.log(text);

    try {
      const res = await fetch("http://localhost:4000/chat", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          //   Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });
      const json = await res.json();
      return json;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const messagesSlice = createSlice({
  name: "Messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(pushOnBackMessages.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      })
      .addCase(getMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.messages = action.payload;
      })
      .addCase(addMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.messages = action.payload;
      });
  },
});

export default messagesSlice.reducer;
