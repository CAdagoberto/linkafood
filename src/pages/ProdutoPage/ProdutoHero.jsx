export default function ProdutoHero({ produto }) {
  return (
    <div className="header">
      <img 
        src={produto.imagem} 
        alt={produto.titulo} 
        loading="lazy"
      />
    </div>
  )
}
