import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
  Stack,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Images/logo.png";
import NavbarDrawer from "./NavbarDrawer";
import SignOut from "../Utilities/SignOut";
import { Box } from "@mui/system";
import { auth } from "../Utilities/Auth";
import { useAuthState } from "react-firebase-hooks/auth";

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

const Navbar = ({ user, displayPicture }) => {
  const [user2, loading] = useAuthState(auth);
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
          {navItems.map((item, index) => {
            return (
              <div key={index}>
                {isMatch ? (
                  <NavbarDrawer
                    user={user2.displayName}
                    displayPicture={user2.photoURL}
                  />
                ) : (
                  <Typography>
                    <NavLink to={item.path} className="navbarItem">
                      {item.name}
                    </NavLink>
                  </Typography>
                )}
              </div>
            );
          })}
          <Box
            flexDirection="row"
            sx={{
              position: "absolute",
              top: 4,
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
            <Box display="flex">
              <Avatar
                alt="logged in user image"
                src={displayPicture}
                sx={{ margin: 1 }}
              />
              <Typography color="black" m={2}>
                {" "}
                {user}
              </Typography>
              <SignOut />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
