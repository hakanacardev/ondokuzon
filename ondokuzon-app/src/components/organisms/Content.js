import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Card from "../molecules/Card";
import { useAmount } from "../Context/Context";

const Content = ({ children }) => {
  const { currencies } = useAmount();
  const options = [
    { label: "None", id: "none" },
    { label: "Income", id: "income" },
    { label: "Expense", id: "expense" },
  ];
  const [filter, setFilter] = useState({
    type: options[0],
    currency: "USD",
  });
  return (
    <Box
      sx={{
        backgroundColor: "rgb(248 250 252)",
        borderTop: "1px solid rgb(226 232 240)",
        borderLeft: "1px solid rgb(226 232 240)",
        borderTopLeftRadius: "16px",
        width: "100%",
        height: "100%",
        overflow: "auto",
        boxSizing: "border-box",
        padding: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography>Filters:</Typography>

        <Autocomplete
          size="small"
          value={filter.type}
          options={options}
          getOptionLabel={(option) => option.label}
          onChange={(event, newValue) => {
            setFilter((prev) => ({ ...prev, type: newValue }));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <Autocomplete
          size="small"
          value={filter.currency}
          options={Object.keys(currencies)}
          onChange={(event, newValue) => {
            setFilter((prev) => ({ ...prev, currency: newValue }));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button variant="outlined">Clear</Button>
      </Box>

      {children}
    </Box>
  );
};
export default Content;
