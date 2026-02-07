import { useState, useEffect } from "react"
import HeaderLoja from '../components/HeaderLoja'
import SearchBar from '../components/SearchBar'
import { Categoria } from '../components/CategoriaProduto/Categoria'
import ProdutoService  from '../services/produtos.service'
import MobileNavbar from '../components/Navegacao/MobileNavbar'
import ProdutoSkeleton from "../components/Loading/ProdutoSkeleton";

export default function HomePage() {
    const [showNavbar, setShowNavbar] = useState(false)
    const [isWide, setIsWide] = useState(false)
    const [produtos, setProdutos] = useState([])
    const [loading, setLoading] = useState(true)  

    useEffect(() => {
    async function carregarProdutos() {
      try {
        const data = await ProdutoService.getProdutos()
        setProdutos(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    carregarProdutos()
  }, [])


    
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


    if(loading) return <ProdutoSkeleton />

    if (!produtos || produtos.length === 0) {
      return <p>Nenhum produto encontrado</p>
    }
      
    const categorias = produtos.map(c => ({
      id: c.id,
      titulo: c.titulo
    }))

    

    return (
        <>
        <div className={` ${isWide ? "container" : ""}`}>
                 <MobileNavbar lojaNome="Minha Loja" categorias={categorias}  visible={showNavbar} />
        
                <div className='header'>
                <img src="../assets/img/loja/loja1.jpg" alt="" />
                </div>
        
                <div className="bodyApp">
                  <div className="bodyContainer">
                    {/* header loja */}
                    <HeaderLoja nomeLoja={"Nome loja exemplo"} horarioFunc={"exemplo de horario 17h às 22h"}/>
        
                    {/* Pesquisa produtos */}
                    <SearchBar />
        
                    {/* Categorias */}
                    {produtos.map((c) => (
                    <Categoria 
                      key={c.id} 
                      titulo={c.titulo} 
                      produtos={c.produtos}
                      id={c.id}

                    />
                  ))}
        
                    
                  </div>
        
                </div>
                
              </div>
        </>
    )
}