// import { Delete } from "@mui/icons-material";
import { Add, Delete, Remove } from "@mui/icons-material";
import {
  Paper,
 
  Button,
  IconButton,
  Badge,
  styled,
} from "@mui/material";
import { increseQuantity,descreseQuantity,deleteProduct } from "../Redux/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CardProductInCartPage = ({quantity,item,imageLink,productName,price}) => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const StyledBadge = styled(Badge)(({ theme }) => ({

    "& .MuiBadge-badge": {
      // backgroundColor:"primary",
    },
  }));

  return (
    <Paper dir="rtl" className="item-container">
      <div className="img-title-parent">

      
        
        <Link to={`/product-detalis/${item.id}`}>  <img
          src={imageLink}
          alt=""
          
         
        /></Link>
        <p className="product-name">{productName}</p>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton   onClick={() => {
              dispatch(increseQuantity(item));
            }} 
            sx={{ ml: "10px" }} color="primary" >
          <Add />
        </IconButton>

        <StyledBadge badgeContent={quantity} color="primary" />

        <IconButton   onClick={() => {
              dispatch(descreseQuantity(item));
            }}  sx={{ mr: "10px" }} color="primary" >
          <Remove />
        </IconButton>
      </div>

      <div className="price">${(Number(price)*Number(item.quantity)).toFixed(2)}</div>

      <Button onClick={()=>{   dispatch(deleteProduct(item));}} className="Text-Delete" variant="text" color="error">
        delete
      </Button>
      <IconButton>
      <Delete onClick={()=>{   dispatch(deleteProduct(item));}} className="Icon-Delete" color="error" />
      </IconButton>
    </Paper>
  );
};

export default CardProductInCartPage;
