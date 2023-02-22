import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { FcHome } from "react-icons/fc";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography className="navbar">
            <NavLink to="info">About</NavLink>
          </Typography>
          <Typography className="navbar">
            {" "}
            <NavLink to="leaflet"> leaflet </NavLink>
          </Typography>
          <Typography className="navbar">
            {" "}
            <NavLink to="layers"> layers </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
