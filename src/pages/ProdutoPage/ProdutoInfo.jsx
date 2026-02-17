import style from './ProdutoInfo.module.css'

export default function ProdutoInfo({ produto }) {

    const formatPrice = (value) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)


  return (
    <>
      <div className={style.headerContent}>
        <h3>{produto.titulo}</h3>
        <p>{produto.descricao}</p>
      </div>

      <h4>Serve {produto.qtdPessoas} Pessoas</h4>

      <h3 className="valor">
        {formatPrice(produto.preco)}
      </h3>
    </>
  )
}
