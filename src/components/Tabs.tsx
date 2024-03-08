import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useSearchParams } from "react-router-dom";

export default function CenteredTabs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSearchParams(`?tab=${newValue}`);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={searchParams.get("tab")} onChange={handleChange} centered>
        <Tab label="授業一覧" value={"classes"} />
        <Tab label="メモ" value={"memo"} />
      </Tabs>
    </Box>
  );
}
