import React, { useState } from "react";
import { Box, Button, duration, Icon, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { auth } from "../Utilities/Auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrMail } from "react-icons/gr";
const Login = () => {
  // login with google
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const Google = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
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
            <Button
              component={motion.div}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="login"
              variant="contained"
              type="submit"
              onClick={Google}
            >
              <Icon>
                <FcGoogle size={20} />
              </Icon>
              Login with google
            </Button>
          </Box>
          <Box mt={2}>
            <Button
              aria-label="login"
              variant="contained"
              component={motion.div}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon>
                <GrMail />
              </Icon>
              login with Email
            </Button>
          </Box>

          <Typography variant="subtitle1" color="white" mt={2}>
            {" "}
            No account <Link to="sign up"> sign up</Link>
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Login;
