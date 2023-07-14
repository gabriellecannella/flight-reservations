import {
  Stack,
  Typography,
  Divider,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Button,
} from "@mui/material";
import React from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const MuiHeader = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction={"row"} alignItems="center" gap={1}>
        <ThemeProvider theme={theme}>
          <AirplanemodeActiveIcon
            style={{ fontSize: 60 }}
            color="primary"
          ></AirplanemodeActiveIcon>
          <Typography color="error" variant="h1" align="center">
            Welcome to Flight Reservations
          </Typography>
          <AirplanemodeActiveIcon
            style={{ fontSize: 60 }}
            color="primary"
          ></AirplanemodeActiveIcon>
        </ThemeProvider>
      </Stack>
      <Divider></Divider>
    </Stack>
  );
};
