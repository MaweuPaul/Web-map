import { Grid, IconButton, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { GrLocationPin, GrMail, GrPhoneFlip } from "react-icons/gr";
import { MdWifiCalling3 } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer">
      <Box sx={{ background: "#000000", bottom: 0 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} display="block">
            <List>
              <ListItem>
                <Typography variant="h5">
                  <GrLocationPin color="red" />
                  <a
                    className="FooterItem"
                    href="https://goo.gl/maps/WicZepEzZ6ZQiM1u9"
                    target="_blank"
                  ></a>
                </Typography>
                <Typography color="white" variant="h5">
                  <a href="mailto:" className="FooterItem">
                    <GrMail />
                    mail us
                  </a>
                </Typography>
                <Typography color="white" variant="h5">
                  <a href="tel:07273278" className="FooterItem">
                    <MdWifiCalling3 />
                    call
                  </a>
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
