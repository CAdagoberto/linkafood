import style from "./ProdutoSkeleton.module.css"

export default function ProdutoSkeleton() {
  return (
    <div className={style.container}>
      <div className={style.image} />

      <div className={style.content}>
        <div className={style.title} />
        <div className={style.text} />
        <div className={style.textSmall} />
        <div className={style.price} />

        <div className={style.card}>
          <div className={style.line} />
          <div className={style.line} />
        </div>
      </div>
    </div>
  )
}
