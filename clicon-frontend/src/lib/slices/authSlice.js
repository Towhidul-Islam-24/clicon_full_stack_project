import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    UserInfoSet: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { UserInfoSet } = authSlice.actions;

export default authSlice.reducer;
