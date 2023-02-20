import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  IconButton,
  InputAdornment,
  InputLabel,
  Slide,
  TextField,
  OutlinedInput,
  Grid,
  CardMedia,
} from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { auth } from "./Auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Signup } from "../Components/Index";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  // to show password onClick
  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };

  // to handle create account logic
  const navigate = useNavigate();
  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        navigate("/");
        setEmail("");
        setPassword("");
      })

      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <>
      {" "}
      <Button
        component={motion.div}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        aria-label="create account"
        onClick={() => setOpen(true)}
        variant="outlined"
      >
        {" "}
        Create account
      </Button>
      <Dialog
        backgroundColor="red"
        maxWidth="md"
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle align="center" variant="h5">
          {" "}
          Sign Up
        </DialogTitle>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img
              width={400}
              className="loginImage"
              src="https://evnts254.s3.eu-west-2.amazonaws.com/event-posters/85cb4fb3c80fbc607347349980f4621bweb%20mapping.jpg"
              alt=""
            />
          </Grid>
          <Grid item xs={6}>
            <DialogContent>
              <FormControl onSubmit={SignUp}>
                <TextField
                  aria-label="enter your email"
                  value={email.toLocaleLowerCase()}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ marginTop: 2 }}
                  size="small"
                  id="outlined-name"
                  label="Email"
                  type="email"
                />
                <TextField
                  aria-label="enter your email"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  sx={{ marginTop: 2 }}
                  size="small"
                  id="outlined-name"
                  label="user name"
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
                color="error"
                size="small"
                variant="contained"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                size="small"
                autoFocus
                onClick={SignUp}
              >
                CreateAccount
              </Button>
            </DialogActions>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default CreateAccount;
