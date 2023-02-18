import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Button, Icon } from "@mui/material";
import { motion } from "framer-motion";
import { auth } from "./Auth";
const LoginWithGoogle = () => {
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
  return (
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
  );
};

export default LoginWithGoogle;