// services/produtos.service.js
import { produtosMock } from "../mocks/produtos.mocks"

export async function getProdutos() {
  // Simula delay de API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(produtosMock)
    }, 500)
  })
}
