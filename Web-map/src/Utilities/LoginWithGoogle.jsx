import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Icon, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { auth } from "./Auth";
const LoginWithGoogle = () => {
  const [error, setError] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const Google = () => {
    signInWithPopup(auth, provider)
      .then((user) => {
        navigate("home/info");
        const userName = user.user.displayName;
        const displayPicture = user.user.photoURL;
        console.log(user, userName, displayPicture);
      })
      .catch((error) => {
        setError(
          <Alert severity="warning">{`${error}couldnt sign You in.Try again later`}</Alert>
        );
      });
  };
  useEffect(() => {
    document.title = "Web map";
  });
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
      <IconButton size="small">
        <FcGoogle size={20} />
      </IconButton>
      Login with google
    </Button>
  );
};

export default LoginWithGoogle;
