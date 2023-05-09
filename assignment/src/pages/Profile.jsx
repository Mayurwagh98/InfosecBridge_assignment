import React, { useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="main_account_div">
      <div className="account_heading">
        <h2>Account Settings</h2>
      </div>
      <div className="details_div">
        <div>
          <img src="src/Images/Ellipse 114.png" alt="" />
          <img src="src/Images/Group 1585.svg" alt="" />
        </div>
        <div>
          <h3>Marry Doe</h3>
          <p>Marry@gmail.com</p>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          doloribus corporis iste possimus ut illo explicabo ullam
        </p>
      </div>
    </div>
  );
};

export { Profile };
