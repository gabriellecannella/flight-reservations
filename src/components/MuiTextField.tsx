import { Stack, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Enter origin or destination"
          size="medium"
          variant="outlined"
          color="info"
          helperText="Enter 3 letter aiport code or begin by searching full origin or destination"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </Stack>
  );
};
