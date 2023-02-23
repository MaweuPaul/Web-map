import { Typography } from "@mui/material";
import React, { useEffect } from "react";

const Layers = () => {
  useEffect(() => {
    document.title = "layers";
  });
  return (
    <Typography color="white" variant="h1">
      {" "}
      iam layers
    </Typography>
  );
};

export default Layers;
