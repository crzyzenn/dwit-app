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
    setDark: (state, action) => {
      state.dark = action.payload;
    },
  },
});

export const { setAuth, setDark } = actions;

export default reducer;
