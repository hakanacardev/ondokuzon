import React from "react";
import Navbar from "../organisms/Navbar";
import { Box } from "@mui/material";
import Sidebar from "../organisms/Sidebar";
import Content from "../organisms/Content";

const Template = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "25% 1fr",
          height: "100%",
        }}
      >
        <Sidebar />
        <Content>{children}</Content>
      </Box>
    </>
  );
};
export default Template;
