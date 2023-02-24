import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Images/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <AppBar sx={{ backgroundColor: "transparent", position: "fixed" }}>
        <Toolbar>
          <Link to="info">
            <img
              src={Logo}
              alt="company logo"
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
          </Link>

          <div className="navbarItems">
            <Typography>
              <NavLink to="info" className="navbarItem">
                About
              </NavLink>
            </Typography>
            <Typography>
              <NavLink to="leaflet" className="navbarItem">
                {" "}
                leaflet{" "}
              </NavLink>
            </Typography>
            <Typography>
              <NavLink to="layers" className="navbarItem">
                {" "}
                layers{" "}
              </NavLink>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
