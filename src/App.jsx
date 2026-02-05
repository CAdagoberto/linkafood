
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProdutoPage from "./pages/ProdutoPage"
import ButtomNav from "./components/BottomNav"


export default function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto/:id" element={<ProdutoPage />} />
      </Routes>
      <ButtomNav />
    </Router>
  )
}

 
