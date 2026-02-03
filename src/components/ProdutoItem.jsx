import styles from './ProdutoItem.module.css'

export function ProdutoItem({ titulo, desc, qtdPessoas, valorProd, img }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <h4>{titulo}</h4>
        <p>{desc}</p>
        <p className={styles.qtdPessoas}>Serve {qtdPessoas} Pessoas</p>
        <p className={styles.valor}>R$ {valorProd}</p>
      </div>
      <div className={styles.itemImg}>
        <img src={img ?? "/assets/img/pratos/sushi.jpg"} alt={titulo} />
      </div>
    </div>
  )
}