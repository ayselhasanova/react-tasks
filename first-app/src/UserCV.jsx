import React from "react";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import "./cv.css";
import photo from "./assets/img/image.png";

const UserCV = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="p-info">
            <img src={photo} alt="profile picture" />
            <PersonalInfo />
          </div>
          <div>
            <div>
              <h1>Aysel Hasanova</h1>
              <p>Web developer</p>
            </div>
            <Contacts />
            <Experience />
            <h3>Languages</h3>
            <ul>
              <li>Azerbaijani - perfect</li>
              <li>English - perfect</li>
              <li>Turkish - perfect</li>
              <li>Russian - perfect</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCV;
