import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Error,
  LoadingSpinner,
  Leaflet,
  Info,
  Layers,
  RoutingMachine,
} from "../Components/Index";

const RoutePages = () => {
  const Login = lazy(() => import("./Login"));
  const Home = lazy(() => import("./Home"));
  const Info = lazy(() => import("./Info"));
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
        <Route
          path="info"
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <Info />
            </React.Suspense>
          }
        ></Route>

        <Route path="leaflet" element={<Leaflet />} />
        <Route path="reverseGeocoding" element={<Layers />} />
        <Route path="route" element={<RoutingMachine />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutePages;
