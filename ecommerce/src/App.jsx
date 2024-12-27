import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Products />} />
          <Route path="editProduct/:id" element={<EditProduct />} />
          <Route path="addProduct" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
