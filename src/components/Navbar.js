import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isLoading, error} = useAuth0();
  let isAuthenticated = useAuth0();
  console.log(isAuthenticated);
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        AlgoritMe
      </a>
      {error && <p>Authentication Errror</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && <></>}
      <ul>
        <li className="active">
          <LoginButton />
          <LogoutButton />
        </li>
        <li>
          <a href="/Test">Start Test</a>
        </li>
        {isAuthenticated && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
