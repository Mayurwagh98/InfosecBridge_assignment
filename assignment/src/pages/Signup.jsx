import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="main_signup_div">
      <h1>Create your PopX account</h1>
      <form>
        <TextField
          id="outlined-basic1"
          label="Full Name *"
          variant="outlined"
          style={{ margin: "35px 0 0 0px", width: "335px" }}
        />

        <TextField
          id="outlined-basic1"
          label="Phone Number *"
          variant="outlined"
          style={{ margin: "25px 0 0 0px", width: "335px" }}
        />
        <TextField
          id="outlined-basic1"
          label="Email Address *"
          variant="outlined"
          style={{ margin: "25px 0 0 0px", width: "335px" }}
        />
        <TextField
          id="outlined-basic2"
          label="Password *"
          variant="outlined"
          style={{ margin: "25px 0 0 0px", width: "335px" }}
        />
        <TextField
          id="outlined-basic2"
          label="Company Name *"
          variant="outlined"
          style={{ margin: "25px 0 0 0px", width: "335px" }}
        />
        <div className="agency_div">
          <label>
            Are you an Agency?<span style={{ color: "red" }}>*</span>
          </label>
          <div>
            <input type="radio" />
            <span>Yes</span>
            <input type="radio" />
            <span>No</span>
          </div>
        </div>
        <Button
          variant="contained"
          className="create_account"
          style={{
            background: "#6C25FF 0% 0% no-repeat padding-box",
            opacity: 1,
            fonWweight: "bold",
          }}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export { Signup };
