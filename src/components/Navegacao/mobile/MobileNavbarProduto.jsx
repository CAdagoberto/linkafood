import { FaHome, FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import styles from "./MobileNavbar.module.css"

export default function MobileNavbarProduto({ produto, visible }) {
  return (
    <header className={`${styles.mobileNavbar} ${visible ? styles.show : styles.hide}`}>
      <div className={styles.topBar}>
        <Link to="/">
          <FaHome className={styles.icon} />
        </Link>
        <span className={styles.lojaNome}>{produto}</span>
        <FaShoppingCart className={styles.icon} />
      </div>
    </header>
  )
}