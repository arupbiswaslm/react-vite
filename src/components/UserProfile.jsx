import React, { useContext } from "react";
import { UserContext } from "../shared/UserContext";

const UserProfile = () => {
  
  const user = useContext(UserContext);
  console.log("User from context:", user);

  return (
    <div className="profile-info">
      <span className="username">{ user.name }</span>
    </div>
  );
};

export default UserProfile;
