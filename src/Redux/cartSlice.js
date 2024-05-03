import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: localStorage.getItem("selectedProducts")?JSON.parse(localStorage.getItem("selectedProducts")):[],
  selectedProductsID:localStorage.getItem("selectedProductsID")? JSON.parse(localStorage.getItem("selectedProductsID")):[],
  // : [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const productWithQuentity = { ...action.payload, quantity: 1 };
      
      state.selectedProducts.push(productWithQuentity);
      state.selectedProductsID.push(action.payload.id)

      localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts))
      localStorage.setItem("selectedProductsID",JSON.stringify(state.selectedProductsID))
    },

    increseQuantity: (state, action) => {

      const increseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increseProduct.quantity += 1;

      localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts))
    },

    descreseQuantity: (state, action) => {
      const increseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increseProduct.quantity -= 1;
      // Delete Selected Product
      if (increseProduct.quantity === 0) {
        const newArryDelete = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;

        });
    const newArryDeleteID = state.selectedProductsID.filter((item) => {
            return item !== action.payload.id;
          });

        state.selectedProducts = newArryDelete;
        state.selectedProductsID = newArryDeleteID;
      localStorage.setItem("selectedProductsID",JSON.stringify(state.selectedProductsID))
        
      }
      localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts))
    },

    deleteProduct: (state, action) => {
      // Delete Selected Product
         const newArryDelete = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;

        });
    const newArryDeleteID = state.selectedProductsID.filter((item) => {
            return item !== action.payload.id;
          });

        state.selectedProducts = newArryDelete;
        state.selectedProductsID = newArryDeleteID;
      localStorage.setItem("selectedProductsID",JSON.stringify(state.selectedProductsID))

      localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts))
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart, increseQuantity, descreseQuantity, deleteProduct } =
  counterSlice.actions;

export default counterSlice.reducer;
