import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { BiAlarm, BiSolidStoreAlt  } from "react-icons/bi";

import ProdutoService from "../services/produtos.service"
import style from "./ProdutoPage.module.css"

export default function ProdutoPage() {
  const [isWide, setIsWide] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)

  const { id } = useParams()

  const [produto, setProduto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    ProdutoService.getProdutoById(id)
      .then(data => {
        setProduto(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [id])

  useEffect(() => {
      const handleResize = () => setIsWide(window.innerWidth > 900)
      const handleScroll = () => setShowNavbar(window.scrollY > 100)

      window.addEventListener("resize", handleResize)
      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

  if (loading) return <p>Carregando produto...</p>
  if (error) return <p>Produto não encontrado</p>

  return (
    <div className={` ${isWide ? "container" : ""}`}>
      <div className="header">
        <img src={produto.imagem} alt={produto.titulo} />
      </div>

      <div className="bodyApp">
        <div className="bodyContainer">
          
            <div className={style.headerContent}>
              <h3>{produto.titulo}</h3>
              <p>{produto.descricao}</p>
            </div>

            <h4>Serve {produto.qtdPessoas} Pessoas</h4>

            <h3 className="valor">
              R$ {produto.preco.toFixed(2)}
            </h3>

            <div className={style.empresaContent}>
              <div className={style.empresaHeader}>
              <BiSolidStoreAlt className={style.icon} />
                <h5>Nome da loja - Localização</h5>
              </div>
              <div className={style.temPreparo}>
                <BiAlarm className={style.icon} />
                <h5>Preparo: {/* Tempo de preparo */}</h5>
              </div>


            </div>
         
          
        </div>
      </div>
    </div>
  )
}
