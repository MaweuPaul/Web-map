import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Error,
  LoadingSpinner,
  Leaflet,
  Info,
  Layers,
} from "../Components/Index";

const RoutePages = () => {
  const Login = lazy(() => import("./Login"));
  const Home = lazy(() => import("./Home"));

  return (
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

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutePages;
