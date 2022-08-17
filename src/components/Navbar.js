import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/authContext";

const Navbar = () => {
const {user, logOut} = UserAuth();
const handleSignOut = async() =>{
  try{
    await logOut();
  }catch (error){
    console.log(error)
  }
}

console.log(user?.displayName);
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        AlgorithMe
      </a>

      <ul>
        <li>
          {user?.displayName && (user.email === "edendahary1@gmail.com" || user.email === "yosefdassa@gmail.com"  ) && (
            <Link to="/admintest">Create Test</Link>
          )}
        </li>
        <li>
          <Link to="/practice">Practice</Link>
        </li>
        <li className="active">
          {user?.displayName ? (
            <button onClick={handleSignOut}>Log Out</button>
          ) : (
            <Link to="/loginbutton">Sign in</Link>
          )}
        </li>
        <li>
          <a href="/test">Start Test</a>
        </li>
        <li>{user?.displayName ? <Link to="/profile">Profile</Link> : ""}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
