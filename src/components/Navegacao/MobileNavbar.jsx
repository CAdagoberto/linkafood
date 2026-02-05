import { FaHome, FaShoppingCart } from "react-icons/fa"
import styles from "./MobileNavbar.module.css"

export default function MobileNavbar({ lojaNome, categorias, visible }) {
  return (
    <header className={`${styles.mobileNavbar} ${visible ? styles.show : styles.hide}`}>
      <div className={styles.topBar}>
        <FaHome className={styles.icon} />
        <span className={styles.lojaNome}>{lojaNome}</span>
        <FaShoppingCart className={styles.icon} />
      </div>
      <div className={styles.categorias}>
        <ul>
          {categorias.map((cat, index) => (
            <li key={index}>
              <a href={`#${cat}`}>{cat}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}