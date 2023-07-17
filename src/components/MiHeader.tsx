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
      <Stack
        spacing={2}
        direction={"row"}
        alignItems="center"
        gap={1}
        paddingBottom={2}
      >
        <ThemeProvider theme={theme}>
          <AirplanemodeActiveIcon
            style={{ fontSize: 70 }}
          ></AirplanemodeActiveIcon>
          <Typography color="primary.dark" variant="h1" align="center">
            Welcome to Flight Reservations
          </Typography>
          <AirplanemodeActiveIcon
            style={{ fontSize: 70 }}
          ></AirplanemodeActiveIcon>
        </ThemeProvider>
      </Stack>
      <Divider sx={{ borderBottomWidth: 5 }}></Divider>
    </Stack>
  );
};
