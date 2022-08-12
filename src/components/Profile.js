import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

return (
    <div>
      <div className="colunm">
        <div className="colunm">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;