import React from "react";
import { UserAuth } from "../context/authContext";
const Profile = () => {

  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-2xl fontbold pt-12">Profile</h1>
      <div>
        <img src={user.photoURL } alt="profile-photo"/>
        <h2 className=" text-center ">Welcome, {user?.displayName}</h2>
        <p className="lead text-muted text-center">{user.email}</p>
      </div>
      <button onClick={handleSignOut} className="py-2 px-5 mt-10">
        Log Out
      </button>
    </div>
  );
  
};



export default Profile;
