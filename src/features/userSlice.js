import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    add_blog: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    delete_blog: (state, action) => {
      let stateDelete = [...state];
      stateDelete.splice(action.payload, 1);
      return stateDelete;
    },
    empty_blog: () => {
      return [];
    },
  },
});
export const { add_blog, delete_blog } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
