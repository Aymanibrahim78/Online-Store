// @ts-nocheck
import { Box } from "@mui/material";
import Appbar from "../Components/Appbar";
import Drawerrr from "Components/Drawerrr";
import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Footer from "../Components/Footer";
const Root = () => {
  const [showMenu, setShowMenu] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");
  const [mode, setMyMode] = useState(localStorage.getItem("theme"));

  localStorage.setItem("theme", mode === "dark" ? "dark" : "light");

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            favColor: {
              main: grey[300],
            },
          }
        : {
            // palette values for dark mode
            favColor: {
              main: grey[800],
            },
          }),
    },
  });

  const drawerWidth = 240;

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Appbar setDrawerType={setDrawerType} setShowMenu={setShowMenu} />
        <Drawerrr
          setDrawerType={setDrawerType}
          setShowMenu={setShowMenu}
          drawerType={drawerType}
          setMyMode={setMyMode}
          myMode={mode}
          showMenu={showMenu}
        />

        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px`, xs: "0" },
            display: "flex",
            justifyContent: "center",
            mt: 7,
          }}
        >
          <Outlet />
        </Box>
        <Box
          component="footer"
          sx={{
            ml: { sm: `${drawerWidth}px`, xs: "0" },
            
            mt: 7,
            

            
          }}
        >

        <Footer/>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Root;
