import { BiAlarm, BiSolidStoreAlt } from "react-icons/bi";
import style from './EmpresaInfo.module.css'

export default function EmpresaInfo() {
  return (
    <div className={style.empresaContent}>
      <div className={style.empresaHeader}>
        <BiSolidStoreAlt className={style.icon} />
        <h5>Nome da loja - Localização</h5>
      </div>

      <div className={style.temPreparo}>
        <BiAlarm className={style.icon} />
        <h5>Preparo: 30-40 min</h5>
      </div>
    </div>
  )
}
