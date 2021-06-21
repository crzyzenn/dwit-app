import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    user: null,
    dark: false,
  },
  reducers: {
    setAuth: (state, action) => {
      const { loggedIn, user } = action.payload;
      state.loggedIn = loggedIn;
      state.user = user;
    },
    toggleDark: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { setAuth, toggleDark } = actions;

export default reducer;
