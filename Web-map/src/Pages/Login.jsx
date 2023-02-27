import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import {
  LoginWithEmail,
  LoginWithGoogle,
  CreateAccount,
} from "../Components/Index";
import ResetPassword from "../Utilities/ResetPassword";

const Login = () => {
  // document title on mount
  useState(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="hero">
      <Box
        textAlign="center"
        sx={{
          paddingTop: { xs: 15, sm: 18, md: 19, lg: 21 },
        }}
      >
        <Typography
          sx={{ fontSize: { xs: 45, sm: 50, md: 60, lg: 70 } }}
          fontWeight={600}
          variant="h1"
          color="white"
          component={motion.div}
          initial={{ opacity: 0.2, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
        >
          <span className="LoginText">Welcome to</span>
          <Typography
            sx={{ fontSize: { xs: 49, sm: 55, md: 65, lg: 75 } }}
            fontWeight={400}
            variant="h1"
            className="awesome"
          >
            <span className="LoginText">GEOMAPPERS</span>
          </Typography>
        </Typography>

        <Box
          component={motion.div}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <Box mt={3}>
            <LoginWithGoogle />
          </Box>
          <Box mt={2}>
            <LoginWithEmail />
          </Box>
          <Typography color="white">
            <span className="LoginOr">or</span>
          </Typography>
          <Box>
            <CreateAccount />
          </Box>
          <Box>
            <Typography>or</Typography>
            <ResetPassword />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
