import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const latestProducts = products.slice(0, 10);

  return (
    <div className="my-10">
      <div className="text-start py-8 text-3xl">
        <Title text1={"LATEST"} text2={"ADDITION!"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;