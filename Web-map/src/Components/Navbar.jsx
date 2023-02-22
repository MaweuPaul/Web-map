import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Link to="info">About</Link>
          <Link to="leaflet"> leaflet </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
