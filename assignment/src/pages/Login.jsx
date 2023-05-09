import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="main_login_div">
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <TextField
        id="outlined-basic1"
        label="Email"
        variant="outlined"
        style={{ margin: "35px 0 0 0px", width: "335px" }}
      />
      <TextField
        id="outlined-basic2"
        label="Password"
        variant="outlined"
        style={{ margin: "20px 0 0 0px", width: "335px" }}
      />
      <Button variant="contained" disabled><span>Login</span></Button>
    </div>
  );
};

export { Login };
