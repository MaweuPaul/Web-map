import { Box } from "@mui/material";
import React, { useState } from "react";
import RoutePages from "./Pages/Routes";
function App() {
  // to access the logged in user

  return (
    <Box className="App">
      <RoutePages />
    </Box>
  );
}

export default App;
