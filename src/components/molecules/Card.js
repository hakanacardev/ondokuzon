import { Box, Typography } from "@mui/material";
import React from "react";

const Card = ({ data }) => {
  let style;
  switch (data.type) {
    case "income":
      style = {
        backgroundColor: "rgb(220 252 231);",
        color: "rgb(34 197 94);",
        border: "1px solid rgb(134 239 172);",
      };
      break;
    case "expense":
      style = {
        backgroundColor: "#fee2e2",
        color: "rgb(239 68 68)",
        border: "1px solid rgb(252 165 165);",
      };
      break;
    default:
      break;
  }
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
        justifyContent: "start",
        borderRadius: 2,
        alignSelf: "center",
        py: 1,
        px: 2,
        width: "100%",
        ...style,
      }}
    >
      <Typography>
        Type: {data.type === "income" ? "Income" : "Expense"}, Amount:{" "}
        {data.amount}
        {data.current}, Explanation: {data.desc}
      </Typography>
    </Box>
  );
};

export default Card;
