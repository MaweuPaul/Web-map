import { Alert, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Auth";
const SignOut = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError("could not sign you out");
      });
  };
  return (
    <>
      <Button
        disableRipple
        disableElevation
        size="small"
        variant="contained"
        onClick={handleSignOut}
      >
        Log out
      </Button>
      {error && <Alert variant="danger"> {error}</Alert>}
    </>
  );
};

export default SignOut;
