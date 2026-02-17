export default function AcompanhamentoProduto({ produto }) {
  return (
    <div className={style.acomItem}>
      <div className={style.ItemTitulo}>
        <h4>{produto.titulo}</h4>
      </div>

      <div className={style.itemImg}>
        <img src={produto.imagem} alt={produto.titulo} />
      </div>

      <div className={style.itemQtd}>
        + 1 -
      </div>
    </div>
  )
}
