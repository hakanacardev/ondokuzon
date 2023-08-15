import logo from "./logo.svg";
import "./App.css";
import {
  Autocomplete,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Balance from "./components/atom/Balance";

function App() {
  const options = [
    { label: "None", id: "none" },
    { label: "Income", id: "income" },
    { label: "Expense", id: "expense" },
  ];
  const [currencies, setCurrencies] = useState([]);
  const [filter, setFilter] = useState({
    type: options[0],
    currency: "USD",
  });
  const getCurrency = () => {
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_bauGK9JbiAlk0rZeVwHa8d2A6wq1tqmuwD0dN4VQ"
    )
      .then((res) => res.json())
      .then((res) => {
        setCurrencies(res.data);
      });
  };
  useEffect(() => {
    getCurrency();
  }, []);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [total, setTotal] = useState(200);
  const convertUsd = (amount, currency) => {
    const convertUsd = amount * currencies[currency];
    return convertUsd;
  };

  /*   total * Currency[selectedCurreny]; */

  const [modalOpen, setModalOpen] = useState(false);
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
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#a855f7",
        contrastText: "#ffffff",
      },
    },
    typography: {
      fontFamily: "Roboto",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
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
          {/* <Box
            sx={(theme) => ({
              backgroundColor: "rgb(243 232 255)",
              px: 2,
              py: 1,
              borderRadius: 2,
              color: theme.palette.primary.main,
            })}
          >
            <Typography>
              Balance:{" "}
              {(total * currencies[baseCurrency]).toFixed(2) + baseCurrency}
            </Typography>
          </Box> */}
          <Balance />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "25% 1fr",
            height: "100%",
          }}
        >
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
          </Box>
        </Box>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default App;
