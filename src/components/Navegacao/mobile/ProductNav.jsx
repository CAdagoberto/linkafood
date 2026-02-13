import { FaHome, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import styles from "./BottomNav.module.css"
import { Link } from "react-router-dom";

export default function ProductNav() {
  return (
    <nav className={styles.bottomNav}>
      <ul>
        <li className={styles.addCarrinho}>
          <button >
            Adicionar ao carrinho
          </button>
        </li>
        
      </ul>
    </nav>
  )
}