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
} from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { auth } from "./Auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  // to show password onClick
  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };

  // to handle create account logic
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
        aria-label="login with email"
        onClick={() => setOpen(true)}
        variant="outlined"
      >
        {" "}
        Create account
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
        <DialogTitle> Sign Up</DialogTitle>
        <DialogContent>
          <FormControl>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
              <InputLabel htmlFor="standard-adornment-email">
                UserName
              </InputLabel>
              <Input id="standard-adornment-weight" type="Email" />
            </FormControl>
            <FormControl
              fullWidth={true}
              sx={{ m: 1, width: "25ch" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={visiblePassword}
                    >
                      {showPassword ? (
                        <AiOutlineEye />
                      ) : (
                        <AiOutlineEyeInvisible />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateAccount;
