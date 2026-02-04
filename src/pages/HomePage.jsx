import { useState, useEffect } from "react"
import HeaderLoja from '../components/HeaderLoja'
import SearchBar from '../components/SearchBar'
import { Categoria } from '../components/Categoria'
import MobileNavbar from '../components/MobileNavbar'

export default function HomePage() {
     const [showNavbar, setShowNavbar] = useState(false)
      const [isWide, setIsWide] = useState(window.innerWidth > 900)
    
      useEffect(() => {
      const handleResize = () => setIsWide(window.innerWidth > 900)
      const handleScroll = () => setShowNavbar(window.scrollY > 100)
    
      window.addEventListener("resize", handleResize)
      window.addEventListener("scroll", handleScroll)
    
      // cleanup
      return () => {
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])
    
      
    const categorias = [
      {
        titulo: "Destaques",
        produtos: [
          { titulo: "Produto 1", desc: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", qtdPessoas: "3", valorProd: 50.90 },
          { titulo: "Produto 2", desc: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", qtdPessoas: "4", valorProd: 60.90, img: "assets/img/pratos/sushi.jpg" },
          { titulo: "Produto 2", desc: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", qtdPessoas: "4", valorProd: 60.90, img: "assets/img/pratos/sushi.jpg" },
          { titulo: "Produto 2", desc: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", qtdPessoas: "4", valorProd: 60.90, img: "assets/img/pratos/sushi.jpg" }
        ]
      },
      {
        titulo: "Promoções",
        produtos: [
          { titulo: "Produto 3", desc: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", qtdPessoas: "2", valorProd: 30.90 },
          { titulo: "Produto 4", desc: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", qtdPessoas: "5", valorProd: 40.90 },
          { titulo: "Produto 3", desc: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", qtdPessoas: "2", valorProd: 30.90 },
          { titulo: "Produto 3", desc: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", qtdPessoas: "2", valorProd: 30.90 },
        ]
      }
    ]

    return (
        <>
        <div className={` ${isWide ? "container" : ""}`}>
                 <MobileNavbar lojaNome="Minha Loja" categorias={categorias.map(titulo => titulo.titulo)} visible={showNavbar} />
        
                <div className='header'>
                <img src="../assets/img/loja/loja1.jpg" alt="" />
                </div>
        
                <div className="bodyApp">
                  <div className="container bodyContainer">
                    {/* header loja */}
                    <HeaderLoja nomeLoja={"Nome loja exemplo"} horarioFunc={"exemplo de horario 17h às 22h"}/>
        
                    {/* Pesquisa produtos */}
                    <SearchBar />
        
                    {/* Categorias */}
                    {categorias.map((p, index) => (
                    <Categoria 
                      key={index} 
                      titulo={p.titulo} 
                      produtos={p.produtos} 
                      id={p.titulo}
                    />
                  ))}
        
                    
                  </div>
        
                </div>
                
              </div>
        </>
    )
}