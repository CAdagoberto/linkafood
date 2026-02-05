import styles from './ProdutoItem.module.css'

export function ProdutoItem({ titulo, desc, qtdPessoas, valorProd, img }) {
  return (
    <a href={`produtos/${titulo}`} className={styles.item}>
      <div className={styles.itemContent}>
        <h4>{titulo}</h4>
        <p>{desc}</p>
        <p className={styles.qtdPessoas}>Serve {qtdPessoas} Pessoas</p>
        <h4 className={styles.valor}>R$ {valorProd}</h4>
      </div>
      <div className={styles.itemImg}>
        <img src={img ?? "/assets/img/pratos/sushi.jpg"} alt={titulo} />
      </div>
    </a>
  )
}