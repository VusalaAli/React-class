import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}> 
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<h1>Not Found 404 </h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
