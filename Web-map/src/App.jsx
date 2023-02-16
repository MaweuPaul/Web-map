import { Error, LoadingSpinner } from "./Components/Index";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import React, { lazy } from "react";

function App() {
  // to add lazy loading to provide feedback to the user
  const Login = lazy(() => import("./Pages/Login"));
  const SignUp = lazy(() => import("./Pages/SignUp"));
  const Home = lazy(() => import("./Pages/Home"));
  return (
    <Box className="App">
      <Routes>
        <Route
          index
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <SignUp />
            </React.Suspense>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Box>
  );
}

export default App;
