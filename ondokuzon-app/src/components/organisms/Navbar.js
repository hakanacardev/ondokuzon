import { Box, Typography } from "@mui/material";
import React from "react";
import Balance from "../atom/Balance";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        px: 2,
        py: 1,
        boxSizing: "border-box",
      }}
    >
      <Typography variant="overline" color="primary" fontWeight={600}>
        Finance Tracker
      </Typography>

      <Balance />
    </Box>
  );
};

export default Navbar;
