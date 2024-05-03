import React, { useRef, useState } from "react";
import "./Details.css";
import { products } from "../../Products";
import { useParams } from "react-router-dom";
import DetailsThumb from "./DetailsThumb";
import { Button, IconButton, Badge, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { Add, Remove } from "@mui/icons-material";
import {
  addtoCart,
  increseQuantity,
  descreseQuantity,
} from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import NotFound from "../NotFound";

const Details = () => {
  let { ID } = useParams();
  const dispatch = useDispatch();
  let idNum = Number(ID);
  const item = products[idNum - 1];

  const { selectedProducts, selectedProductsID } = useSelector(
    // @ts-ignore
    (state) => state.cartt
  );
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      // backgroundColor:"primary",
    },
  }));

  const [index, setindex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    // this.setState({index: index})
    setindex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  const productQuantityy = (itemPro) => {
    const quantityProduct = selectedProducts.find((item) => {
      return item.id === itemPro.id;
    });
    return quantityProduct.quantity;
  };

  if (item) {
    return (
      <div className="app">
        <div className="details">
          <div className="big-img">
            <img src={products[idNum - 1].imageLink[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{products[idNum - 1].productName}</h2>
              <span>${products[idNum - 1].price}</span>
            </div>

            <p>{products[idNum - 1].description}</p>

            <DetailsThumb
              images={products[idNum - 1].imageLink}
              tab={handleTab}
              myRef={myRef}
            />

            {selectedProductsID.includes(products[idNum - 1].id) ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={() => {
                    dispatch(descreseQuantity(products[idNum - 1]));
                  }}
                  sx={{ mr: "10px" }}
                  color="primary"
                >
                  <Remove />
                </IconButton>

                <StyledBadge
                  badgeContent={productQuantityy(products[idNum - 1])}
                  color="primary"
                />

                <IconButton
                  onClick={() => {
                    dispatch(increseQuantity(products[idNum - 1]));
                  }}
                  sx={{ ml: "10px" }}
                  color="primary"
                >
                  <Add />
                </IconButton>
              </div>
            ) : (
              <Button
                onClick={() => {
                  dispatch(addtoCart(products[idNum - 1]));
                }}
                sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
                variant="contained"
                color="primary"
              >
                Add To Cart
              </Button>
            )}
            {/* <button className="cart">Add to cart</button> */}
          </div>
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Details;
