import CardProductInCartPage from "Components/CardProductInCartPage";
import "./Cart.css";
import { Box, Typography, Paper, Divider, Stack, Button } from "@mui/material";
import { useSelector } from "react-redux";

const Cart = () => {
  // @ts-ignore
  const { selectedProducts } = useSelector((state) => state.cartt);

  let subtotal=0
  return (
    <Box>
      {selectedProducts.map((item) => {
        subtotal+=Number(item.price)*Number(item.quantity)
        return (
          <CardProductInCartPage
            key={item.id}
            imageLink={item.imageLink[0]}
            productName={item.productName}
            price={item.price}
            item={item}
            quantity={item.quantity}
          />
        );
      })}

      <Paper sx={{ width: "200px", mx: "auto", mt: "60px" }}>
        <Typography align="center" variant="h6" p={2}>
          Cart Summary
        </Typography>
        <Divider />
        <Stack
          sx={{ justifyContent: "space-between", p: 1.2 }}
          direction={"row"}
        >
          <Typography variant="body1">subtotal</Typography>
          <Typography variant="body1">${subtotal.toFixed(2)}</Typography>
        </Stack>
        <Divider />
        <Button fullWidth color="primary" variant="contained">
          chckout
        </Button>
      </Paper>
    </Box>
  );
};

export default Cart;
