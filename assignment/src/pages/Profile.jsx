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
          <img
            src="https://user-images.githubusercontent.com/69896733/237038737-7b9771bf-d1ce-4d36-835e-e91776db6a7f.png"
            alt="image"
          />
          <img
            src="https://user-images.githubusercontent.com/69896733/237038782-0737284c-5d44-4cbf-921b-d7906a402526.svg"
            alt="svg"
          />
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
