// services/produtos.service.js
import { produtosMock } from "../mocks/produtos.mocks"

const ProdutoService = {
  async  getProdutos() {
  // Simula delay de API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(produtosMock)
    }, 500)
  })
},

async  getProdutoById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const categoria of produtosMock) {
        const produto = categoria.produtos.find(p => p.id === id)
        if (produto) {
          resolve(produto)
          return
        }
      }

      reject(new Error("Produto não encontrado"))
    }, 400)
  })
}

}


export default ProdutoService
