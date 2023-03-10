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
const navItems = [
  {
    name: "About",
    path: "/home/info",
  },
  {
    name: "Leaflet",
    path: "/home/leaflet",
  },
  {
    name: "reverse Geocoding",
    path: "/home/reverseGeocoding",
  },
  {
    name: "route",
    path: "/home/route",
  },
];
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
          {navItems.map((item) => {
            return (
              <>
                {isMatch ? (
                  <NavbarDrawer />
                ) : (
                  <Typography>
                    <NavLink to={item.path} className="navbarItem">
                      {item.name}
                    </NavLink>
                  </Typography>
                )}
              </>
            );
          })}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <Typography color="green">signed in as{}</Typography>
            <SignOut />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
