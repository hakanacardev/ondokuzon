import { Box, Typography } from "@mui/material";
import React from "react";

const Card = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fca5a5",
        borderRadius: 2,
        alignSelf: "center",
        mt: 2,
      }}
    >
      <Typography>
        Type: Income, Amount: 165USD, Explanation: fdrdcrcdr
      </Typography>
    </Box>
  );
};

export default Card;
