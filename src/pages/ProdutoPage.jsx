import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProdutoService from "../services/produtos.service"
import ProdutoSkeleton from "../components/Loading/ProdutoSkeleton";
import ProdutoHero from './ProdutoPage/ProdutoHero'
import ProdutoInfo from './ProdutoPage/ProdutoInfo'
import EmpresaInfo from './ProdutoPage/EmpresaInfo'
import AcompanhamentoList from './ProdutoPage/AcompanhamentoList'


export default function ProdutoPage() {
  const [isWide, setIsWide] = useState(false)

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
    handleResize() // define valor inicial

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  if (loading) return <ProdutoSkeleton />
  if (error) return <p>Produto não encontrado</p>

  return (
    <div className={isWide ? "container" : ""}>
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
