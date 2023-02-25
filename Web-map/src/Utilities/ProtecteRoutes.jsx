import { Routes, Route } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...rest }) => (
  <Routes>
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  </Routes>
);
export default ProtectedRoutes;
