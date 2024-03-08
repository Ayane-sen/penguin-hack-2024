import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Props = {
  memo: string;
};

const FullWidthTextField: React.FC<Props> = ({ memo }) => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        multiline
        rows={20}
        label="memo"
        id="memo"
        value={memo}
      />
    </Box>
  );
};

export default FullWidthTextField;
