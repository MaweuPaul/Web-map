import React from "react";
import { AppBar, CardMedia, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "../Images/logo.png";
import { Box } from "@mui/system";
const Navbar = () => {
  return (
    <div>
      <AppBar sx={{ backgroundColor: "transparent", position: "fixed" }}>
        <Toolbar>
          <img
            src={Logo}
            alt="company logo"
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />

          <Typography className="navbar">
            <NavLink to="info">About</NavLink>
          </Typography>
          <Typography className="navbar">
            <NavLink to="leaflet"> leaflet </NavLink>
          </Typography>
          <Typography className="navbar">
            <NavLink to="layers"> layers </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
