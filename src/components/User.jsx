import React from "react";
import '../css/User.css';

function User({user}) {
  if (!user) {
    return null;
  } else {
    console.log("user: ", user);
  }

  return (
    <div id="back1">
    <div id="user">
      <img src={user.data.avatar_url} alt={`${user.data.login}'s avatar`} />
      <h2 id="name">{user.data.login}</h2>
      <p >{user.data.name}</p>
      <p>Followers: {user.data.followers}</p>
      <p>Following: {user.data.following}</p>
    </div>
    </div>
  );
}

export default User;
