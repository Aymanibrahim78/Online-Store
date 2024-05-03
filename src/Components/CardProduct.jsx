import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
  Badge,
  styled,
} from "@mui/material";
import { addtoCart, increseQuantity,descreseQuantity } from "../Redux/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Add, Remove } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ productName, description, price, imageLink ,item}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  // @ts-ignore
  const { selectedProducts ,selectedProductsID} = useSelector((state) => state.cartt);
const navigate=useNavigate()
  const StyledBadge = styled(Badge)(({ theme }) => ({

    "& .MuiBadge-badge": {
      // backgroundColor:"primary",
    },
  }));

  const productQuantityy = (itemPro) => {

    
    
      const quantityProduct = selectedProducts.find((item)=>{
        return(
          item.id===itemPro.id
        );
      })
      return quantityProduct.quantity
     
    
  }  
  
  return (
    <Card sx={{ maxWidth: 277, m: 1 }}>
      <CardMedia
        component="img"
        height="250px"
        image={imageLink}
        alt="green iguana"
        onClick={()=>{
          navigate(`product-detalis/${item.id}`)
        }}
        sx={{cursor:"pointer"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <CardActions
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          disableSpacing
        >

        

{selectedProductsID.includes(item.id)?(<div  style={{ display: "flex", alignItems: "center" }}>



<IconButton   onClick={() => {
      dispatch(descreseQuantity(item));
    }}  sx={{ mr: "10px" }} color="primary" >
  <Remove />
</IconButton>
<StyledBadge badgeContent={productQuantityy(item)} color="primary" />

<IconButton   onClick={() => {
      dispatch(increseQuantity(item));
    }} 
    sx={{ ml: "10px" }} color="primary" >
  <Add />
</IconButton>
</div>):(  <Button
            onClick={() => {
              dispatch(addtoCart(item));
            }}
            sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
            variant="contained"
            color="primary"
          >
            Add To Cart
          </Button>)}
         
          <Typography variant="body1" color={theme.palette.error.light}>
            ${price}
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CardProduct;


