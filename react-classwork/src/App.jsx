import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import EditProduct from "./pages/EditProduct";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import Layout from './layout/Layout';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="editproduct" element={<EditProduct />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
