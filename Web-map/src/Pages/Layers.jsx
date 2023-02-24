import { Typography } from "@mui/material";
import React, { useEffect } from "react";

const Layers = () => {
  useEffect(() => {
    document.title = "layers";
  });
  return (
    <Typography color="#293745" variant="h5">
      iam layers
    </Typography>
  );
};

export default Layers;
