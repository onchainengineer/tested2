
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./login/login.js"
import ProductView from "./component/productview.js"
import ProductPage from "./component/productdetail.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/productview" element={<ProductView />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/" element={<Navigate replace to="/productview" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;