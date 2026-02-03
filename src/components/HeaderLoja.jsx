import style from './HeaderLoja.module.css'

export default function HeaderLoja({nomeLoja, horarioFunc}) {
    return (
        <>
            <div className={style.headerApp}>

               <div className={style.imgLoja}></div>

              <div className={style.descLoja}>
                <h2>{nomeLoja}</h2>
                <p>{horarioFunc}</p>
              </div>
            </div>
        </>
    )
}