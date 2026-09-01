import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import FeedReducer from "./FeedSlice";
import connectionReducer from "./connectionSlice";
import reqeustReducer from "./requestSlice";



const appStore = configureStore({
  reducer : {
    user : userReducer,
    feed : FeedReducer,
    connection : connectionReducer,
    request : reqeustReducer,
  },
});

export default appStore;