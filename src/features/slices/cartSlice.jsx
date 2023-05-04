import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === item.id &&
            product.size === item.size &&
            product.color === item.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += item.price;
          state.totalAmount++;
          state.totalPrice += item.price;
        } else {
          state.cart.push({
            id: item.id,
            price: item.price,
            amount: 1,
            totalPrice: item.price,
            name: item.name,
            img: item.img,
            text: item.text,
            color: item.color,
            size: item.size,
          });
          state.amount++;
          state.totalAmount++;
          state.totalPrice += item.price;
        }
      } catch (error) {
        return error;
      }
    },
    removeFromCart(state, action) {
      const item = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === item.id &&
            product.size === item.size &&
            product.color === item.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== item.id ||
              product.color !== item.color ||
              product.size !== item.size
          );
          state.totalAmount--;
          state.totalPrice -= item.price;
        }
        else {
            exist.amount--;
            exist.totalPrice -= item.price;
            state.totalAmount --;
            state.totalPrice-= item.price;
        }
      } catch (error) {
        return error;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
