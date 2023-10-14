import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      // اگر محصول در سبد خرید قبلا وارد شده بود
      const existItems = state.itemList.find((item) => item.id === newItem.id);

      if (existItems) {
        // اگر محصول بود تعدادش رو افزایش بده
        existItems.quantity++;
        // افزایش قیمت
        existItems.totalPrice += newItem.price;
      } else {
        // اگر محصول در سبد خرید نبود ، بیا و محصول جدید رو با این ویژی ها ذخیره کن
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.cover,
        });
        // قیمت نهایی
        state.totalQuantity++;
      }
    },
    // حذف از سبد خرید
    removeFromCart(state, action) {
      const id = action.payload;
      const exitstingItem = state.itemList.find((item) => item.id === id);

      if (exitstingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
        state.totalQuantity--
      } else {
        exitstingItem.quantity--
        exitstingItem.totalPrice -= exitstingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
