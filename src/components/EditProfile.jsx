import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstname] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photourl, setPhotourl] = useState(user.photourl);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  

  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photourl,
          age,
          gender,
          about,
        },
        {
          withCredentials: true,
        },
      );

      dispatch(addUser(res.data.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      
      setError(error.response?.data || "Something went wrong");
    }
  };

  return (

    <>
    <div className="flex justify-center items-start gap-12 my-20 mx-10">
      
      {/* Edit Profile Form */}
      <div className="card bg-base-300 w-125 shadow-xl">
        <div className="card-body">

          <h2 className="card-title justify-center text-2xl mb-4">
            Edit Profile
          </h2>

          <div className="grid grid-cols-2 gap-x-5 gap-y-2">

            {/* First Name */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>

              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>

            {/* Last Name */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>

              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>

            {/* Age */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Age</span>
              </div>

              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>

            {/* Gender */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Gender</span>
              </div>

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="select select-bordered w-full"
              >
                <option value="" disabled>
                  Select gender
                </option>

                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </label>

            {/* Photo URL */}
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>

              <input
                type="text"
                value={photourl}
                onChange={(e) => setPhotourl(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>

            {/* About */}
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text">About</span>
              </div>

              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                maxLength={200}
                className="textarea textarea-bordered w-full h-24"
              />
            </label>

          </div>

          {/* Save Button */}
          <div className="flex justify-center mt-5">
            <button
              className="btn btn-primary px-8"
              onClick={saveProfile}
            >
              Save Profile
            </button>
          </div>

        </div>
      </div>

      {/* User Preview */}
      <UserCard
        user={{
          firstName,
          lastName,
          photourl,
          about,
          age,
          gender,
        }}
      />

    </div>
    {showToast && (
  <div className="toast toast-top toast-center">
    <div className="alert alert-success">
      <span>Profile saved successfully</span>
    </div>
  </div>
)}
    </>
  );
};

export default EditProfile;