import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" href="/">
        戻る
      </Button>
      <Button variant="contained" href="/1">
        一覧
      </Button>
      <Button variant="contained" href="/1/new">
        入力
      </Button>
    </Stack>
  );
}
