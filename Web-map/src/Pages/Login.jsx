import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import {
  LoginWithEmail,
  LoginWithGoogle,
  CreateAccount,
} from "../Components/Index";

import useStyles from "../Components/MaterialUiStyles";

const Login = () => {
  const classes = useStyles();
  // document title on mount
  useState(() => {
    document.title = "Login";
  }, []);

  return (
    <Stack className="hero">
      <Box textAlign="center" mt={{ xs: 7, sm: 10, md: 20, lg: 30 }}>
        <Typography
          variant="h3"
          color="white"
          component={motion.div}
          initial={{ opacity: 0.2, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
        >
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
          Accusamus, minus.
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
    </Stack>
  );
};

export default Login;
