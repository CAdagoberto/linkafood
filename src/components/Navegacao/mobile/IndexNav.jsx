import { FaHome, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import styles from "./BottomNav.module.css"
import { Link } from "react-router-dom";

export default function IndexNav() {
  return (
    <nav className={styles.bottomNav}>
      <ul>
        <li>
          <FaHome />
          <Link to={"/"}>Início</Link>
        </li>
        <li>
          <FaSearch />
          <span>Buscar</span>
        </li>
        <li>
          <FaShoppingCart />
          <span>Carrinho</span>
        </li>
        <li>
          <FaUser />
          <span>Perfil</span>
        </li>
      </ul>
    </nav>
  )
}