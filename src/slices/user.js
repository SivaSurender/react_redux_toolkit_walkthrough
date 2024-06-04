import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      email: "test@123.com",
      name: "test",
      age: 24,
      location: "chennai",
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = {
        email: "",
        name: "",
        age: 0,
        location: "",
      };
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
