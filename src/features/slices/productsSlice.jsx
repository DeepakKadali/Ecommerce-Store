import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("FilteredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("SingleProduct")) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter((data) => data.type === action.payload);
        state.filteredProducts = filter;  
        sessionStorage.setItem("FilteredData", JSON.stringify(filter));
      } catch (error) {
        return error;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (data) => data.id === action.payload
        );
        state.singleProduct = oneProduct;
        sessionStorage.setItem("SingleProduct", JSON.stringify(oneProduct));
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filterProducts, singleProduct } = productsSlice.actions;
export default productsSlice.reducer;
