import React, { useEffect } from "react";
import { BASE_URL } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFeed } from "../utils/FeedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed) return;
    try {
      const feed = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(feed.data));
      console.log(feed);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);


  if(!feed) return;


  if(feed.length <= 0 ) return <h1 className="flex justify-center m-52 text-3xl">No more users</h1>

  
  return feed && feed.map((user) => <UserCard key = {user._id} user={user} />);
};

export default Feed;
