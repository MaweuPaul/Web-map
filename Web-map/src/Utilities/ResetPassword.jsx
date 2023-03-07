import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <Link to="reset password">
      {" "}
      <Button variant="outlined">
        <Typography fontSize={10} color="white">
          {" "}
          reset password
        </Typography>
      </Button>
    </Link>
  );
};

export default ResetPassword;
