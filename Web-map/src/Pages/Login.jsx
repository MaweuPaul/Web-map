import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LoginWithGoogle from "../Utilities/LoginWithGoogle";
import { LoginWithEmail } from "../Components/Index";
const Login = () => {
  // document title on mount
  useState(() => {
    document.title = "Login";
  }, []);

  return (
    <Stack mt={20}>
      <Box textAlign="center">
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
          <Typography variant="subtitle1" color="white" mt={2}>
            {" "}
            No account{" "}
            <Link className="Link" to="signUp">
              {" "}
              sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Login;
