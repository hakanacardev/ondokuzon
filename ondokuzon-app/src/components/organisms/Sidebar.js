import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAmount } from "../Context/Context";

const Sidebar = () => {
  const { total, baseCurrency, setBaseCurrency, currencies, setCurrencies } =
    useAmount();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Box sx={{ display: "grid", gridTemplateRows: "1fr auto", p: 2 }}>
      <Box>
        <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
          <Button
            sx={{ flex: 1 }}
            fullWidth
            variant="contained"
            onClick={() => setModalOpen(true)}
          >
            Income
          </Button>
          <Button fullWidth sx={{ flex: 1 }} variant="outlined">
            Expense
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography>Base Currency:</Typography>

          <Autocomplete
            size="small"
            options={Object.keys(currencies)}
            onChange={(event, newValue) => {
              setBaseCurrency(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Currency" />
            )}
          />
        </Box>
        <Typography>Total Incomes: 0TRY</Typography>
        <Typography>Total Expenses: 0TRY</Typography>
      </Box>
      <Typography
        variant="overline"
        color="primary"
        textAlign="center"
        fontWeight={600}
      >
        Finance Tracker
      </Typography>
    </Box>
  );
};
export default Sidebar;
