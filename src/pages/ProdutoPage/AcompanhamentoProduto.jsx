import style from "./AcompanhamentoProduto.module.css"

export default function AcompanhamentoProduto({ produto }) {
  return (
    <div className={style.card}>
      <div className={style.info}>
        <h5 className={style.title}>{produto.titulo}</h5>
      </div>

      <div className={style.imageWrapper}>
        <img src={produto.imagem} alt={produto.titulo} />
      </div>

      <div className={style.quantity}>
        <button className={style.btn}>−</button>
        <span className={style.count}>1</span>
        <button className={style.btn}>+</button>
      </div>
    </div>
  )
}
