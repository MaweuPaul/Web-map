import { useState } from "react";
import { Login, Home, Signup } from "./Components/Index";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Box>
  );
}

export default App;
