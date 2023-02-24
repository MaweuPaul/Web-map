import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
  Slide,
  TextField,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Auth";

import { useNavigate } from "react-router-dom";
// to handle transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginWithEmail = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  // to show password onClick
  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };

  // to handle
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        navigate("home/info");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Button
        component={motion.div}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        aria-label="login with email"
        variant="outlined"
        onClick={() => setOpen(true)}
      >
        <IconButton size="small">
          <GrMail color="white" />
        </IconButton>{" "}
        <Typography color="white" variant="subtitle 1">
          Login with email
        </Typography>
      </Button>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Login with Email</DialogTitle>
        <DialogContent>
          <FormControl>
            <TextField
              aria-label="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginTop: 2 }}
              size="small"
              id="outlined-name"
              label="userName"
            />

            <FormControl
              aria-label="password"
              variant="outlined"
              size="small"
              sx={{ marginTop: 2, marginBottom: 2 }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      disableRipple
                      aria-label="toggle password visibility"
                      onClick={visiblePassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <AiOutlineEye />
                      ) : (
                        <AiOutlineEyeInvisible />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button variant="contained" autoFocus onClick={login}>
            login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginWithEmail;
