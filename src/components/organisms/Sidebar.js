import {
  Autocomplete,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAmount } from "../Context/Context";

const Sidebar = () => {
  const { setBaseCurrency, currencies, addData, data, baseCurrency } =
    useAmount();
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    amount: 0,
    current: "USD",
    desc: "",
    type: "income",
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "grid",
    gap: 2,
  };

  let totalIncome = 0;
  let totalExpense = 0;
  data.forEach((element) => {
    if (element.type === "income") {
      totalIncome += element.amount;
    } else {
      totalExpense += element.amount;
    }
  });
  return (
    <Box sx={{ display: "grid", gridTemplateRows: "1fr auto", p: 2 }}>
      <Box>
        <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
          <Button
            sx={{ flex: 1 }}
            fullWidth
            variant="contained"
            onClick={() => {
              setModalOpen(true);
              setForm((prev) => ({ ...prev, type: "income" }));
            }}
          >
            Income
          </Button>
          <Button
            fullWidth
            sx={{ flex: 1 }}
            variant="outlined"
            onClick={() => {
              setModalOpen(true);
              setForm((prev) => ({ ...prev, type: "expense" }));
            }}
          >
            Expense
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography>Base Currency:</Typography>

          <Autocomplete
            disableClearable
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
        <Typography>
          Total Incomes:{" "}
          {(totalIncome * currencies[baseCurrency]).toFixed(2) + baseCurrency}{" "}
        </Typography>
        <Typography>
          Total Expenses:{" "}
          {(totalExpense * currencies[baseCurrency]).toFixed(2) + baseCurrency}{" "}
        </Typography>
      </Box>
      <Typography
        variant="overline"
        color="primary"
        textAlign="center"
        fontWeight={600}
      >
        Finance Tracker
      </Typography>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            alignItems={"center"}
            display={"flex"}
            justifyContent={"center"}
            variant="h6"
            component="h2"
          >
            {form.type === "income" ? "Income" : "Expense"}
          </Typography>
          <TextField
            value={form.amount}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, amount: e.target.value }))
            }
          />
          <Autocomplete
            size="small"
            value={form.current}
            onChange={(event, newValue) =>
              setForm((prev) => ({ ...prev, current: newValue }))
            }
            options={Object.keys(currencies)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Currency" />
            )}
          />
          <TextField
            value={form.desc}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, desc: e.target.value }))
            }
          />
          <Button
            variant="contained"
            onClick={() => {
              addData(form);
              setModalOpen(false);
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
export default Sidebar;
