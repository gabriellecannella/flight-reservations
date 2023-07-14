import { Stack, Button, Alert, ButtonGroup } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

export const MuiButton = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained">Text</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="error">
          primary
        </Button>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="primary">
          primary
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          onClick={() => alert("Clicked")}
        >
          Logo
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Logo
        </Button>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left Click")}> Left</Button>
          <Button> Center</Button>
          <Button> Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
