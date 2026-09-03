import { createSlice } from "@reduxjs/toolkit";
import Feed from "../components/Feed";

const FeedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers:{
    addFeed: (state, action) => {
      return action.payload;
    },
     removeUserFromFeed: (state, action) => {
      const newFeed = state.filter((user) => user._id !== action.payload);
      return newFeed;
    },
    removeFeed : (state, action) => {
      return null;

    },
  }
});

export const {addFeed, removeFeed, removeUserFromFeed} = FeedSlice.actions;
export default FeedSlice.reducer;