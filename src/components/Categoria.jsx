import { ListaProdutos } from "./ListaProdutos"
import style from "./Categoria.module.css"

export function Categoria({ id, titulo, produtos = [] }) {
  return (
    <div id={id} className="itemCategory">
      <div className={style.categoryHeader}>
        <h3>{titulo}</h3>
      </div>

      <ListaProdutos produtos={produtos} />
    </div>
  )
}
