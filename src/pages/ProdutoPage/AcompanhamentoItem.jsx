import { BiBadgeCheck } from "react-icons/bi";
import AcompanhamentoProduto from "./AcompanhamentoProduto";

export default function AcompanhamentoItem({ acompanhamento }) {
  return (
    <div className={style.acompanhamento}>
      <div className={style.acomHeader}>
        <h4>{acompanhamento.titulo}</h4>
        <BiBadgeCheck className={style.acomIcon} />
      </div>

      <div className={style.acomItens}>
        {acompanhamento.produtos.map(pr => (
          <AcompanhamentoProduto key={pr.id} produto={pr} />
        ))}
      </div>
    </div>
  )
}
