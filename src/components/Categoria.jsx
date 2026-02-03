import { ListaProdutos } from "./ListaProdutos"
import style from "./Categoria.module.css"

export  function Categoria({ titulo, produtos, id }) {
  return (
    <div id={`${id}`} className="itemCategory">
      <div className={style.categoryHeader}>
        <h3>{titulo}</h3>
      </div>
      <ListaProdutos produtos={produtos} />
    </div>
  )
}