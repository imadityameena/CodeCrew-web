import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import FeedReducer from "./FeedSlice";



const appStore = configureStore({
  reducer : {
    user : userReducer,
    feed : FeedReducer
  }
})

export default appStore;