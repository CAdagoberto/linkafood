import { ProdutoItem } from "./ProdutoItem"
import style from "./ListaProdutos.module.css"

export function ListaProdutos({ produtos = [] }) {
  return (
    <div className={style.itens}>
      {produtos.map((item) => (
        <ProdutoItem 
          key={item.id}
          titulo={item.titulo}
          desc={item.descricao}
          qtdPessoas={item.qtdPessoas}
          valorProd={item.preco}
          img={item.imagem || "/assets/img/pratos/sushi1.jpg"}
          id={item.id}
        />
      ))}
    </div>
  )
}
