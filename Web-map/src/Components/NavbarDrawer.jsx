import React, { useState } from "react";
import {
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Images/logo.png";
import SignOut from "../Utilities/SignOut";
import { Box } from "@mui/system";

const NavBarSmall = [
  {
    name: "info",
    path: "/home/info",
  },
  {
    name: "leaflet",
    path: "/home/leaflet",
  },
  {
    name: "reversegeocoding",
    path: "/home/reverseGeocoding",
  },
  {
    name: "route",
    path: "/home/route",
  },
];
const NavbarDrawer = ({ user, displayPicture }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer
        hideBackdrop={true}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <div
                  className="navbarItemsDrawerMain"
                  onClick={() => setOpenDrawer(false)}
                >
                  <Link to="info">
                    <img
                      src={Logo}
                      alt="company logo"
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                    />
                  </Link>
                  {NavBarSmall.map((navitem, index) => {
                    return (
                      <Typography padding={1} key={index}>
                        <NavLink to={navitem.path} className="navbarItemDrawer">
                          {navitem.name}
                        </NavLink>
                      </Typography>
                    );
                  })}
                </div>

                {/* to display the username and picture */}
                <Box textAlign="center" bgcolor="green">
                  <Typography color="black">{user}</Typography>
                  <Avatar
                    alt="logged in user image"
                    src={displayPicture}
                    sx={{ alignSelf: "center" }}
                  />
                  <SignOut />
                </Box>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        edge="end"
        sx={{ right: 10, position: "absolute", bottom: "50%", top: "50%" }}
        onClick={() => setOpenDrawer(true)}
      >
        <AiOutlineMenu />
      </IconButton>
    </div>
  );
};

export default NavbarDrawer;
