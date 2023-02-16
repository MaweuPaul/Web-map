import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
  Input,
  Slide,
} from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// to handle transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginWithEmail = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  // to show password onClick
  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };

  // to handle login with Email
  return (
    <>
      <Button onClick={() => setOpen(true)}> Login with Email</Button>
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
          <Button onClick={() => setOpen(false)}> Cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginWithEmail;
