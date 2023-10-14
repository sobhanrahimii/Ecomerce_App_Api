import React from "react";
import { product } from "../../assets/data/data";
import ProductsCart from "./ProductsCart";
import "./products.css";


const Products = () => {
  return (
    <div>
      <section className="product">
        <div className="container grid3">
          {product.map((item, i) => (
            <ProductsCart key={i} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
