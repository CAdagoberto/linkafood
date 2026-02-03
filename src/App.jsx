import './App.css'
import HeaderLoja from './components/HeaderLoja'
import SearchBar from './components/SearchBar'
import { Categoria } from './components/Categoria'
import BottomNav from './components/BottomNav'

 

export default function App() {
  
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
      { titulo: "Produto 4", desc: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", qtdPessoas: "5", valorProd: 40.90 }
    ]
  }
]

  return (
    <>
      <div className='container'>
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
            />
          ))}

            
          </div>

        </div>
        <BottomNav />
      </div>
    </>
  )
}

 
