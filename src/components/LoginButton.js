import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/authContext";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const LoginButton = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
    if(user != null){
      navigate("/profile");
    }
  },[user]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-8 ">Sign in</h1>
      <div className="max-w-[240px] m-auto py-4">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default LoginButton;
