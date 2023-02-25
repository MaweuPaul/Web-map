import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Images/logo.png";
import NavbarDrawer from "./NavbarDrawer";
import SignOut from "../Utilities/SignOut";
import { Box } from "@mui/system";
const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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
          {isMatch ? (
            <NavbarDrawer />
          ) : (
            <div className="navbarItems" style={{ marginLeft: "auto" }}>
              <Typography>
                <NavLink to="info" className="navbarItem">
                  About
                </NavLink>
              </Typography>
              <Typography>
                <NavLink to="leaflet" className="navbarItem">
                  leaflet
                </NavLink>
              </Typography>
              <Typography>
                <NavLink to="layers" className="navbarItem">
                  layers
                </NavLink>
              </Typography>

              <Box sx={{}}>
                <Typography color="green">signed in as{}</Typography>
              </Box>
              <SignOut />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
