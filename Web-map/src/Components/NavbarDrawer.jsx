import React, { useState } from "react";
import {
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
];
const NavbarDrawer = () => {
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
                  {NavBarSmall.map((navitem, Index) => {
                    return (
                      <Typography padding={1} key={Index}>
                        <NavLink to={navitem.path} className="navbarItemDrawer">
                          {navitem.name}
                        </NavLink>
                      </Typography>
                    );
                  })}
                </div>
                <SignOut />
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
