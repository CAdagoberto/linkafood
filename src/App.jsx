
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProdutoPage from "./pages/ProdutoPage"
import HomeLayout from './layouts/HomeLayout'
import ProductLayout from './layouts/ProdutoLayout'


export default function App() {
 

  return (
    <Router>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
          
        </Route>
      </Routes>

      <Routes>
        <Route element={<ProductLayout />}>
          <Route path="produto/:id" element={<ProdutoPage />} />
        </Route>
      </Routes>
      
    </Router>
  )
}

 
