import {
  Error,
  LoadingSpinner,
  Leaflet,
  Info,
  Footer,
  Layers,
} from "./Components/Index";
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
          exact
          path="/"
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <Login />
            </React.Suspense>
          }
        />

        <Route
          path="Home"
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <Home />
            </React.Suspense>
          }
        >
          {" "}
          <Route path="info" element={<Info />} />
          <Route path="leaflet" element={<Leaflet />} />
          <Route path="layers" element={<Layers />} />
        </Route>

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
