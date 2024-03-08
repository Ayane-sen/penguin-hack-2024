import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Link to="/">戻る</Link>
      <Link to="/students/1">一覧</Link>
      <Link to="/1/new">入力</Link>
    </Stack>
  );
}
