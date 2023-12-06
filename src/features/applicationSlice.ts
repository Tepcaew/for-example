import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  signinUp: false,
  signinIn: false,
  token: localStorage.getItem("token"),
  user: {
    programs: []
  },
  users: [],
};

export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async ({ login, password, avatar}, thunkAPI) => {
    const formData = new FormData();
    formData.append("image", avatar);
    formData.append("login", login);
    formData.append("password", password);
    // formData.append("admin", admin);

    try {
      const res = await fetch("http://localhost:4000/sign", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error + "w");
      }
      return json;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const authSignIn = createAsyncThunk(
  "auth/signin",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }

      localStorage.setItem("token", token.token);
      return token.token;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getUserById = createAsyncThunk(
  "user/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/user", {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });

      const user = await res.json();
      if (user.error) {
        return thunkAPI.rejectWithValue(user.error);
      }
      return user;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUsers = createAsyncThunk("users/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/users", {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });

    const users = await res.json();
    if (users.error) {
      return thunkAPI.rejectWithValue(users.error);
    }
    return users;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const addPrograms = createAsyncThunk(
  "user/program",
  async ({ id, program, price }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({ id, program, price }),
      });

      const user = await res.json();

      if (user.error) {
        return thunkAPI.rejectWithValue(user.error);
      }
      return [id, program];
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);



export const exits = createAsyncThunk("exit/user", async (_, thunkAPI) => {
  return localStorage.clear();
});

export const appliactionSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.pending, (state, action) => {
        state.signinUp = true;
        state.error = null;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.signinUp = false;
        state.error = action.payload;
      })
      .addCase(authSignUp.fulfilled, (state, action) => {
        state.signinUp = false;
        state.error = null;
      })
      .addCase(authSignIn.pending, (state, action) => {
        state.signinIn = false;
        state.error = null;
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.signinIn = false;
        state.error = action.payload;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.signinIn = true;
        state.error = null;
        state.token = action.payload;
      })
      .addCase(exits.fulfilled, (state, action) => {
        state.token = null;
        state.user = {};
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
  },
});

export default appliactionSlice.reducer;