import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Atom } from 'react-loading-indicators'

const ProductDetail = () => {
  const {id} = useParams()
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  function GetData() {
    fetch(`http://localhost:3000/products/`+id)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        setLoading(false);
      });
  }
  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
     <h2>Product Details</h2>
     {loading ? (
        <Atom
          color="#3135cc"
          size="large"
          text="loading..."
          textColor="#NaNNaNNaN"
        />
      ) : (<ul>
      <li>Photo: <img src={products.image} alt="" /></li>
      <li>Title: {products.title}</li>
      <br />
      <li>Description: {products.description}</li>
      <br />
      <li>Category: {products.category}</li>
      <br />
      <li>Price: {products.price}</li>
      {/* <li>Rate: {products.rating.rate}</li>
      <li>Count: {products.rating.count}</li> */}
     </ul>)}
    </>
  )
}

export default ProductDetail
