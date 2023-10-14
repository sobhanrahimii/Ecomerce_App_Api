import React from "react";
import { Order } from "../../components/Hero/Order";
import { Slider } from "../../components/Hero/Slide";
import Category from "../../components/category/Category";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <>
      <Slider />
      <Order />
      <Category />
      <Products />
    </>
  );
};

export default Home;
