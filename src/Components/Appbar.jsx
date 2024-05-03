import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Appbar = ({ setShowMenu, setDrawerType }) => {
  const drawerWidth = 240;

  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)`, xs: "100%" },
        ml: { sm: `${drawerWidth}px`, xs: "0" },
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={() => {
            setShowMenu("block");
            setDrawerType("temporary");
          }}
        >
          <Menu />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Online Store
        </Typography>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {" "}
            Ayman Ibrahim
          </Typography>

          <Avatar alt="Ayman Ibrahim" src="https://h.top4top.io/p_30349pjhe1.jpg" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
