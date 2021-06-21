import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    user: null,
  },
  reducers: {
    setAuth: (state, action) => {
      const { loggedIn, user } = action.payload;
      state.loggedIn = loggedIn;
      state.user = user;
    },
  },
});

export const { setAuth } = actions;

export default reducer;
