import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const state = useSelector((state) => console.log(state));
  return (
    <div>
      <h1>Name</h1>
      <h1>Age</h1>
      <h1>Location</h1>
      <h1>Place</h1>
    </div>
  );
}

export default Profile;
