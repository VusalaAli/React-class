import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Layout from './layout/Layout';
import { HelmetProvider } from 'react-helmet-async';
function App() {

  return (
    <>
     <HelmetProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Favorite />} />
        </Route>
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </BrowserRouter>
     </HelmetProvider>
    </>
  )
}

export default App
