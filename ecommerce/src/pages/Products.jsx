import React, { useEffect, useState } from 'react'
import { Atom } from 'react-loading-indicators';
import { Link } from 'react-router-dom';

const Products = () => {
    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(true)

    function getData() {
        fetch(`https://676925c5cbf3d7cefd39c25e.mockapi.io/api/products`)
          .then((res) => res.json())
          .then((data) => {
            setproduct(data);
            setloading(false);
          });
      }
     useEffect(() => {
      getData()
     }, [])
     const handleDelete = (id) => {
        fetch('https://676925c5cbf3d7cefd39c25e.mockapi.io/api/products/' +id, { method: 'DELETE' })
        .then(()=>getData())
    }
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
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Delete</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {product.map((x) => (
              <tr key={x.id}>
                <td>{x.title}</td>
                <td>{x.description}</td>
                <td>{x.category}</td>
                <td>{x.price}</td>
                <td><button onClick={() => handleDelete(x.id)}>Delete</button></td>
                <td><Link to={"/admin/editProduct/" +x.id }>edit</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Products
