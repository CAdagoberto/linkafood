import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProdutoService from "../services/produtos.service"

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
        <div className="container bodyContainer">

          <h3>{produto.titulo}</h3>
          <p>{produto.descricao}</p>

          <h3 className="valor">
            R$ {produto.preco.toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  )
}
