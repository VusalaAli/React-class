// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [products, setproducts] = useState([]);
//   const [loading, setloading] = useState(true);
//   const navigate = useNavigate();

//   function getData() {
//     fetch(`https://fakestoreapi.com/products`)
//       .then((res) => res.json())
//       .then((data) => {
//         setproducts(data);
//         setloading(false);
//       });
//   }
//   useEffect(() => {
//     getData();
//   }, []);
//   const handleClick = (id) => {
//     navigate(`/detail/${id}`);
//   };
//   return (
//     <>
//       <Helmet>
//         <title>Home</title>
//         <link rel="canonical" href="https://www.tacobell.com/" />
//       </Helmet>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <td>Photo</td>
//               <td>Title</td>
//               <td>Price</td>
//               <td>Details</td>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((x) => (
//               <tr key={x.id}>
//                 <td>
//                   <img src={x.image} alt="" />
//                 </td>
//                 <td>{x.title}</td>
//                 <td>{x.price}</td>
//                 <td>
//                   <button onClick={() => handleClick(x.id)}>Details</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </>
//   );
// };

// export default Home;

// import React, { useState } from 'react'
// import useCounter from '../hooks/useCounter'

// const Home = () => {
//   const [count, inc, dec] = useCounter(0)
//   return (
//     <>
//       <h2>Counter</h2>
//       <button onClick={()=> inc()}>+</button>
//       <span>{count}</span>
//       <button onClick={()=> dec()}>-</button>
//     </>
//   )
// }

// export default Home
import React from 'react'

const Home = () => {

  return (
    <>
      <form>
        <input type="text"/>
        <button>Add</button>
      </form>
    </>
  )
}

export default Home
