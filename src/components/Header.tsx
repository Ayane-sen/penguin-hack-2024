import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Link
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
          to="/"
        >
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
