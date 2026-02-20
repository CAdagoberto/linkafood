import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProdutoService from "../services/produtos.service"
import ProdutoSkeleton from "../components/Loading/ProdutoSkeleton";
import ProdutoHero from './ProdutoPage/ProdutoHero'
import ProdutoInfo from './ProdutoPage/ProdutoInfo'
import EmpresaInfo from './ProdutoPage/EmpresaInfo'
import AcompanhamentoList from './ProdutoPage/AcompanhamentoList'
import MobileNavbarProduto from "../components/Navegacao/mobile/MobileNavbarProduto";




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
      const handleScroll = () => setShowNavbar(window.scrollY > 50)

      window.addEventListener("resize", handleResize)
      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])


  if (loading) return <ProdutoSkeleton />
  if (error) return <p>Produto não encontrado</p>

  return (
    <div className={isWide ? "container" : ""}>
      <MobileNavbarProduto produto={produto.titulo} visible={showNavbar} />

      <ProdutoHero produto={produto} />

      <div className="bodyApp">
        <div className="bodyContainer">
          <ProdutoInfo produto={produto} />
          <EmpresaInfo />
          <AcompanhamentoList acompanhamentos={produto.acompanhamento} />
        </div>
      </div>
    </div>
  )

}
