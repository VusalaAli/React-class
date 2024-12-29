import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setproduct(data);
        setloading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {product.map((x) => (
              <tr key={x.id}>
                <td>
                  <img src={x.image} />
                </td>
                <td>{x.title}</td>
                <td>{x.description}</td>
                <td>{x.category}</td>
                <td>{x.price}</td>
                <button><i className="fa-regular fa-heart"></i></button>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Home;
