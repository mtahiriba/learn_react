import React from "react";
import Card from "./Card";
import { ProductsList } from "../../../Content";

const Products = () => {
  return (
    <div className="py-10 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold text-center">Our Products</h1>
      <div className="flex mx-4 lg:mx-12 xl:mx-14 2xl:mx-28 flex-wrap">
        {ProductsList?.map((product) => {
          return (
            <div key={product.id} className="w-full sm:w-[50%] md:w-[33.3333%] lg:w-[25%] xl:w-[20%] flex justify-center pb-12 px-3 sm:pb-4">
              <Card 
                url={product.image}
                title={product.title}
                description={product.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
