import style from './SearchBar.module.css'

export default function SearchBar() {
    return (
        <>
        <div className={style.searchApp}>
              <input type="text" placeholder='Buscar por Item' />
            </div>
        </>
    )
}