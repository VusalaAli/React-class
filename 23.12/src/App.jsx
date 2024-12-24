import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //  const [inp, setinp] = useState("")
  // const [count, setcount] = useState(0)
  // useEffect(() => {
  //   console.log("hello");
  // }, [])
const [products, setproducts] = useState([])


function GetData(){
  fetch(`https://676925c5cbf3d7cefd39c25e.mockapi.io/api/users`)
  .then((res)=> res.json())
  .then((data)=> setproducts(data))
}
useEffect(() => {
 GetData()
}, [])

async function Delete(id) {
 await fetch(`https://676925c5cbf3d7cefd39c25e.mockapi.io/api/users/`+id, { method: 'DELETE' })
  GetData()
}

  return (
    <>
      {/* <input type="text" value={inp} onChange={(e)=>setinp(e.target.value)}/>
     <h2>{inp.trim() ? inp.trim().split("").filter(x=>x===" ").length+1 :0}</h2>
     <h2>{inp.trim().length}</h2> */}
      {/* <button onClick={()=> setcount(count+1)}></button>
        <h2>{count}</h2> */}
        <h2>Products</h2>
        <ul>
          {console.log(products)}
        {products.map((x) => (
          <li key={x.id}>{x.name}<button onClick={()=>Delete(x.id)}>Delete</button></li> 
        ))}
        </ul>
    </>
  );
}

export default App;
