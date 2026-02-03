import { ProdutoItem } from "./ProdutoItem"
import style from "./ListaProdutos.module.css"

export function ListaProdutos({ produtos }) {
  return (
    <div className={style.itens}>
      {produtos.map((item, index) => (
        <ProdutoItem 
          key={index}
          titulo={item.titulo}
          desc={item.desc}
          qtdPessoas={item.qtdPessoas}
          valorProd={item.valorProd}
          img={item.img ? item.img : "assets/img/pratos/sushi1.jpg" }
        />
      ))}
    </div>
  )
}