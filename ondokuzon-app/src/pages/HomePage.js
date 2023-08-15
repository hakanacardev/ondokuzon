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
  return (
    <div className="App">
      <Template>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
          <Card type={"income"} />
        </Box>
      </Template>
    </div>
  );
};

export default HomePage;
