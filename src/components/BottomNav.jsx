import { FaHome, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import styles from "./BottomNav.module.css"

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      <ul>
        <li>
          <FaHome />
          <span>Início</span>
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