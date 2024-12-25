import React from "react";
import { useState, useEffect } from "react";
import { Atom } from "react-loading-indicators";
const Products = () => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  function GetData() {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        setLoading(false);
      });
  }
  useEffect(() => {
    GetData();
  }, []);
  const handleClick = (id) => {
    navigate(`productdetail/${id}`);
  };
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
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {products.map((x) => (
              <tr key={x.id}>
                <td><img src={x.image}/></td>
                <td>{x.title}</td>
                <td>{x.description}</td>
                <td>{x.category}</td>
                <td>{x.price}</td>
                <td><button  onClick={() => handleClick(x.id)}>Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Products;
