import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

function App() {
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
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#1c4ed8",
          justifyContent: "space-between",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          padding: "32px",
        }}
      >
        <Box>Finance Tracker</Box>
        <Box>Balance: 0TRY</Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <Box
          sx={{
            width: "25%",
            justifyContent: "space-between",
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box
              sx={{
                justifyContent: "space-between",
                display: "flex",
                width: "100%",
              }}
            >
              <Button onClick={() => setModalOpen(true)}>Income</Button>
              <Button>Expense</Button>
            </Box>
            <Box>Base Currency: TRY</Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box>Total Incomes: 0TRY</Box>
              <Box>Total Expenses: 0TRY</Box>
            </Box>
          </Box>
          <Box>Finance Traker</Box>
        </Box>
        <Box
          sx={{
            width: "75%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              marginTop: "16px",
              flexDirection: "row",
            }}
          >
            Filters:
          </Box>
          No Match
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
  );
}

export default App;
