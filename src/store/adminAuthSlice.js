import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
  token: localStorage.getItem("admin_token") || null,
  isAuthenticated: !!localStorage.getItem("admin_token"),
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.admin = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("admin_token", action.payload.token);
    },
    logout: (state) => {
      state.admin = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("admin_token");
    },
  },
});

export const { login, logout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
