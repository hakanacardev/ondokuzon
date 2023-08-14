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

function App() {
  const [Currency, setCurrency] = useState([]);
  const [filter, setFilter] = useState({
    type: "none",
    currency: null,
  });
  const getCurrency = () => {
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_bauGK9JbiAlk0rZeVwHa8d2A6wq1tqmuwD0dN4VQ"
    )
      .then((res) => res.json())
      .then((res) => {
        setCurrency(res.data);
        setFilter((prev) => ({ ...prev, currency: res.data[0] }));
      });
  };
  useEffect(() => {
    getCurrency();
  }, []);

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
  const options = [
    { label: "None", id: "none" },
    { label: "Income", id: "income" },
    { label: "Expense", id: "expense" },
  ];

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
          <Box
            sx={(theme) => ({
              backgroundColor: "rgb(243 232 255)",
              px: 2,
              py: 1,
              borderRadius: 2,
              color: theme.palette.primary.main,
            })}
          >
            <Typography>Balance: 0TRY</Typography>
          </Box>
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
                  options={Object.keys(Currency)}
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
                renderInput={(params) => <TextField {...params} />}
              />
              <Autocomplete
                size="small"
                value={filter.currency}
                options={Object.keys(Currency)}
                
                renderInput={(params) => <TextField {...params} />}
              />
              <Button variant="outlined">Clear</Button>
            </Box>

            <Typography>No Match</Typography>
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
