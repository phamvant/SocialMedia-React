// import React from "react";
import { Button, IconButton, Typography } from "@mui/material";
// import {
//   Camera,
//   Outlet,
//   PhotoCamera,
//   Settings,
//   Upload,
// } from "@mui/icons-material";
import styled from "@emotion/styled";
// import { createTheme } from "@mui/material";

import React from "react";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Box, Container, Stack } from "@mui/system";
import { theme } from "./theme";
import Add from "./components/Add";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    margin: 5,
    "&:hover": {
      backgroundColor: "orange",
    },
    "&:disable": {
      backgroundColor: "gray",
      color: "gray",
    },
  });
  // return (
  //   <div>
  //     <Button variant="outlined" color="secondary" endIcon={<Outlet />}>
  //       Outlined
  //     </Button>
  //     <Button variant="contained" component="label" startIcon={<Upload />}>
  //       Upload
  //       <input hidden accept="image/*" multiple type="file" />
  //     </Button>
  //     <IconButton color="primary" aria-label="upload" component="label">
  //       <input hidden accept="image/*" type="file" />
  //       <PhotoCamera />
  //     </IconButton>
  //     <BlueButton>BlueButton</BlueButton>
  //     <Typography variant="h1" component="h2">
  //       h1. Heading
  //     </Typography>
  //   </div>
  // );

  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
