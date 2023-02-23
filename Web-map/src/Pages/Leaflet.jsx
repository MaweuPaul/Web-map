import { Typography } from "@mui/material";
import React, { useEffect } from "react";

const Leaflet = () => {
  useEffect(() => {
    document.title = "leaflet";
  });
  return <Typography color="white"> hello iam leaflet</Typography>;
};

export default Leaflet;
