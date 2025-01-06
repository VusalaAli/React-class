// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const Detail = () => {
//   const {id} = useParams()
//   const [products, setproducts] = useState([]);
//   function GetData() {
//     fetch(`https://fakestoreapi.com/products/`+id)
//       .then((res) => res.json())
//       .then((data) => {
//         setproducts(data);
//       });
//   }
//   useEffect(() => {
//     GetData();
//   }, []);
//   return (
//     <>
//      <h2>Product Details</h2>
//      <ul>
//       <li>Photo: <img src={products.image} alt="" /></li>
//       <li>Title: {products.title}</li>
//       <br />
//       <li>Description: {products.description}</li>
//       <br />
//       <li>Category: {products.category}</li>
//       <br />
//       <li>Price: {products.price}</li>
//      </ul>
//     </>
//   )
// }

// export default Detail

