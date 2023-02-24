import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { GrHome } from "react-icons/gr";
import { Link, Outlet } from "react-router-dom";
import { Footer, Navbar } from "../Components/Index";

const Home = () => {
  useEffect(() => {
    document.title = "Webmap";
  });
  return (
    <div>
      <Navbar />
      <Box mt={10}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
