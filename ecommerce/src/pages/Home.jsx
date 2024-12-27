import React, { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";

const Home = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  function getData() {
    fetch(`https://676925c5cbf3d7cefd39c25e.mockapi.io/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        setloading(false);
      });
  }
 useEffect(() => {
  getData()
 }, [])
 
  return (
    <>
      {loading ? (
        <Atom
          color="#3135cc"
          size="large"
          text="loading..."
          textColor="#NaNNaNNaN"
        />
      ) : (
        <>
        <div className="card">
          <div className="card-body row">
           {products.map((x) =>(
            <div style={{border:"1px solid black"}} className="col-4" key={x.id}>
                <div>Title: {x.title}</div>
                <div>Description: {x.description}</div>
                <div>Category: {x.category}</div>
                <div>Price: {x.price}</div>
            </div>
           ))}
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default Home;
