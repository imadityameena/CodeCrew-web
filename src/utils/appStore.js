import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import FeedReducer from "./FeedSlice";
import connectionReducer from "./connectionSlice";



const appStore = configureStore({
  reducer : {
    user : userReducer,
    feed : FeedReducer,
    connection : connectionReducer,
  },
});

export default appStore;