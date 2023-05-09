import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Landing.css";
import "@fontsource/rubik";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();

  return (
    <div className="main_landing_div">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <div className="button_div">
        <Stack spacing={2} direction="column">
          <Button variant="contained" onClick={() => navigate("/signup")}>
            <span>Create Account</span>
          </Button>
          <Button variant="contained" onClick={() => navigate("/login")}>
            Already Registered? Login
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export { Landing };
