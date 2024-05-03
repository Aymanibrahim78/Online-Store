import {
  Home,
  Brightness7,
  Brightness4,
  ShoppingCart,
} from "@mui/icons-material";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Badge,
  styled,
} from "@mui/material";

import { useTheme } from "@emotion/react";

import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));


const Drawerrr = ({
  setDrawerType,
  setMyMode,
  myMode,
  showMenu,
  drawerType,
  setShowMenu,
}) => {
  // @ts-ignore
  const { selectedProducts } = useSelector((state) => state.cartt);

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const drawerWidth = 240;

  const menuName = [
    {
      id: 1,
      name: "Home",
      icon: <Home />,
      link: "/",
    },
    {
      id: 2,
      name: "Cart",
      icon: (
        <StyledBadge badgeContent={selectedProducts.length} color="secondary">
          <ShoppingCart />
        </StyledBadge>
      ),
      link: "/cart",
    },
  ];
  return (
    <Drawer
      sx={{
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          display: { xs: showMenu, sm: "block" },
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={() => {
        setShowMenu("none");
        setDrawerType("permanent");
      }}
    >
      <List>
        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
        >
          <IconButton
            onClick={() => {
              setMyMode(myMode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {myMode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </ListItem>

        <Divider />
        {menuName.map((item) => {
          return (
            <ListItem
              onClick={() => {
                navigate(item.link);
                setShowMenu("none");
                setDrawerType("permanent");
              }}
              key={item.id}
              disablePadding
              // @ts-ignore
              sx={{
                bgcolor:
                  location.pathname === item.link
                    ? theme.palette.favColor.main
                    : null,
              }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Drawerrr;
