import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  author: null,
  token: localStorage.getItem("author_token") || null,
  isAuthenticated: !!localStorage.getItem("author_token"),
};

const authorAuthSlice = createSlice({
  name: "authorAuth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.author = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("author_token", action.payload.token);
    },
    logout: (state) => {
      state.author = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("author_token");
    },
  },
});

export const { login, logout } = authorAuthSlice.actions;
export default authorAuthSlice.reducer;
