import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import {
  LoginWithEmail,
  LoginWithGoogle,
  CreateAccount,
} from "../Components/Index";

const Login = () => {
  // document title on mount
  useState(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="hero">
      <Box textAlign="center">
        <Typography
      
          sx={{ paddingTop: { xs: 7, sm: 10, md: 18, lg: 26 } }}
          variant="h4"
          color="white"
          component={motion.div}
          initial={{ opacity: 0.2, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
        >
          Lorem ipsum dolor sit amet consectetur <br /> <Typography variant="h2" className="awesome">Lorem ipsum dolor sit amet.</Typography> 
        
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
          <Typography color="white"> or</Typography>
          <Box>
            <CreateAccount />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
