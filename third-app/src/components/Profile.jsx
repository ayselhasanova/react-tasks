import React from "react";
import pp from "../assets/image.png";
import "./profile.css";

// Import of Components
import Name from "./Name";
import Email from "./Email";
import Adress from "./Adress";
import PersonalInfo from "./PersonalInfo";

const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <img src={pp} alt="profile picture" />
            <PersonalInfo />
          </div>
          <div>
            <Name />
            <Email />
            <Adress />
            <h3>Experience:</h3>
            <p>4 years</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
