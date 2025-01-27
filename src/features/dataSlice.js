import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedItemIds: [],
};

export const dataSlice = createSlice({
  name: "data", // Slice name
  initialState, // Default state is "grid"
  reducers: {
    likeItem: (state, { payload }) => {
      if (state.likedItemIds.includes(payload)) {
        state.likedItemIds = state.likedItemIds.filter((li) => li !== payload);
      } else {
        state.likedItemIds = [...state.likedItemIds, payload];
      }
    }, // Action to activate grid view
  },
});

// Exporting actions
export const { likeItem } = dataSlice.actions;

// Exporting reducer
export default dataSlice.reducer;
