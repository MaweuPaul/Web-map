import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import serverError from "../Lotties/98488-bot-error-404.json";

const Error = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: serverError,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box>
      <Lottie options={defaultOptions} height={400} width={400} />
      <Typography variant="h6" textAlign="center" color="white">
        Web map couldn't load your request
        <Link className="Link" to="/">
          Back home{" "}
        </Link>
      </Typography>
    </Box>
  );
};

export default Error;
