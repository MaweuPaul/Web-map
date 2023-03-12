import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer, LoadingSpinner, Navbar } from "../Components/Index";
import { auth } from "../Utilities/Auth";
import { useAuthState } from "react-firebase-hooks/auth";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Webmap";
  });

  const [user, loading] = useAuthState(auth);
  // to check if user is logged in
  if (loading) {
    return <LoadingSpinner />;
  }
  if (!user) {
    navigate("/");
  }
  if (user) {
    return (
      <div>
        <Navbar user={user.displayName} displayPicture={user.photoURL} />
        <Box mt={10}>
          <Outlet />
        </Box>
        <Footer />
      </div>
    );
  }
};

export default Home;
