import React, { useState } from "react";
import {
  Button,
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
const NavbarDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText disableTypography>
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
                  <Typography>
                    <NavLink to="info" className="navbarItemDrawer">
                      About
                    </NavLink>
                  </Typography>
                  <Typography>
                    <NavLink to="leaflet" className="navbarItemDrawer">
                      {" "}
                      leaflet{" "}
                    </NavLink>
                  </Typography>
                  <Typography>
                    <NavLink to="layers" className="navbarItemDrawer">
                      {" "}
                      layers{" "}
                    </NavLink>
                  </Typography>
                </div>
                <Button variant="contained"> log out</Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(true)}
      >
        <AiOutlineMenu />
      </IconButton>
    </div>
  );
};

export default NavbarDrawer;
