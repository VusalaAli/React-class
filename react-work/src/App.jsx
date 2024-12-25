import { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";
import "./App.css";

function App() {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  function GetData(){
    fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((data) => {setproducts(data) 
      setLoading(false)})
    
  }
  useEffect(() => {
  GetData()
  }, []);
  return (
    <>
     {loading ? (
       <Atom color="#3135cc" size="large" text="loading..." textColor="#NaNNaNNaN" /> 
      ) : (
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((x) => (
            <tr key={x.id}>
              <td>
                <img src={x.image} />
              </td>
              <td>{x.title}</td>
              <td>{x.description}</td>
              <td>{x.category}</td>
              <td>{x.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </>
  );
}
export default App;
