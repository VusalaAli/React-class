import React from "react";
import { products } from "../../mockData";
import Cards from "../Cards/cards";

const Card = () => {
   
  return (
    <>
 <div className="container text-center">
 <div className="row row-cols-3 row-gap-5 d-flex justify-content-between">
    {products.map((a) => (
        <Cards key={a.id} {...a}></Cards>
    ))}
      
    </div>
 </div>
    </>
  );
};

export default Card;
