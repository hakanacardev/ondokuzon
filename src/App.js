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
import AmountContext, { useAmount } from "./components/Context/Context";
import HomePage from "./pages/HomePage";

function App() {
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
      <AmountContext>
        <HomePage />
      </AmountContext>
    </ThemeProvider>
  );
}

export default App;
