import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  BsTwitter,
  BsTelegram,
  BsInstagram,
  BsYoutube,
  BsMap,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <Box
        sx={{ background: "#000000", width: "100%", marginBottom: 0 }}
        paddingTop={7}
      >
        <Grid container>
          <Grid item xs={12} md={6} lg={6} display="block">
            <div className="footerLeft">
              <Typography
                variant="h5"
                textAlign="center"
                sx={{ borderBottom: "1px solid rgb(55, 149, 161)" }}
              >
                About us
              </Typography>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                corrupti non dolor! Nemo culpa dolore minima. Aut error dolor
                sapiente!
              </Typography>

              {/* start icon contacts */}
              <Box paddingTop={3}>
                <IconButton>
                  <a href="" target="_blank">
                    <BsTwitter color="#1D9BF0" />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="" target="_blank">
                    <BsInstagram className="instagram-logo" />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="" target="_blank">
                    <BsTelegram color="#0088cc" />
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://www.youtube.com/watch?v=J1gzN1SAhyM"
                    target="_blank"
                  >
                    <BsYoutube color="red" />
                  </a>
                </IconButton>
              </Box>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={6} display="block">
            <div className="footerRight">
              <Typography
                variant="h5"
                textAlign="center"
                sx={{ borderBottom: "1px solid rgb(55, 149, 161)" }}
              >
                Contact us
              </Typography>
              <Box>
                <a href="">
                  <Typography> Dedan kimathi , Nyeri</Typography>
                </a>
                <a href="tel:07162882817">
                  <Typography>0716288187</Typography>
                </a>
                <a href="mailto:geomappers@gmail.com">
                  <Typography>geomappers@gmail.com</Typography>
                </a>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
