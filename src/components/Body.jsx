import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      const user = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      console.log(user.data);
      dispatch(addUser(user.data));
    } catch (error) {
      if (error.status == 401) {
        navigate("/login");
      }
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
