import { Box, Typography } from "@mui/material";
import React from "react";

const Balance = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: "rgb(243 232 255)",
        px: 2,
        py: 1,
        borderRadius: 2,
        color: theme.palette.primary.main,
      })}
    >
      <Typography>
        Balance: {(total * currencies[baseCurrency]).toFixed(2) + baseCurrency}
      </Typography>
    </Box>
  );
};

export default Balance;
