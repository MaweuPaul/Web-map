import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
const Info = () => {
  return (
    <div style={{ marginTop: 4 }} className="main">
      <Box
        textAlign="center"
        sx={{ marginTop: { xm: 10, sm: 15, md: 20, lg: 25 } }}
      >
        <Typography
          color="#293745"
          variant="h4"
          component={motion.div}
          initial={{ opacity: 0.0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          s
          transition={{
            duration: 0.4,
            delay: 0.5,
            type: "spring",
            stiffness: 120,
          }}
        ></Typography>
        <Typography
          color="#293745"
          variant="h4"
          component={motion.div}
          initial={{ opacity: 0.0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.9,
            type: "spring",
            stiffness: 120,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Typography>
        <Typography
          color="#293745"
          variant="h4"
          component={motion.div}
          initial={{ opacity: 0.0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.4,
            type: "spring",
            stiffness: 120,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          numquam?
        </Typography>
        <Typography
          color="#293745"
          variant="h4"
          component={motion.div}
          initial={{ opacity: 0.0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.8,
            type: "spring",
            stiffness: 120,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero
          nulla corporis laboriosam ullam ipsa.
        </Typography>
      </Box>
    </div>
  );
};

export default Info;
