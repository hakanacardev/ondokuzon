import React from "react";
import "./HomePage.css";
import {
  Autocomplete,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAmount } from "../components/Context/Context";
import Balance from "../components/atom/Balance";
import Card from "../components/molecules/Card";
import Navbar from "../components/organisms/Navbar";
import Sidebar from "../components/organisms/Sidebar";
import Content from "../components/organisms/Content";
import Template from "../components/template/Template";
const HomePage = () => {
  const { total, baseCurrency, setBaseCurrency, currencies, setCurrencies } =
    useAmount();
  const options = [
    { label: "None", id: "none" },
    { label: "Income", id: "income" },
    { label: "Expense", id: "expense" },
  ];
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
  return (
    <div className="App">
      <Template></Template>
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
  );
};

export default HomePage;
