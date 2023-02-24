import { Typography } from "@mui/material";
import React, { useEffect } from "react";

const Leaflet = () => {
  useEffect(() => {
    document.title = "leaflet";
  });
  return <Typography color="#293745"> hello iam leaflet</Typography>;
};

export default Leaflet;
