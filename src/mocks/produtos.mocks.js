import { FaWineGlassEmpty } from "react-icons/fa6";

// mocks/produtos.mock.js
export const produtosMock = [
  {
    id: "destaques",
    titulo: "Destaques",
    produtos: [
      {
        id: "1",
        titulo: "Combo Sushi",
        descricao: "and more recently with desktop publishing software like Aldus PageMaker",
        preco: 50.9,
        qtdPessoas: 3,
        imagem: "/assets/img/pratos/sushi.jpg"
      },
      {
        id: "2",
        titulo: "Combo Família",
        descricao: "and more recently with desktop publishing software like Aldus PageMaker",
        preco: 80.9,
        qtdPessoas: 4,
        imagem: null
      },
      {
        id: "3",
        titulo: "Combo Família",
        descricao: "and more recently with desktop publishing software like Aldus PageMaker",
        preco: 80.9,
        qtdPessoas: 4,
        imagem: "/assets/img/pratos/sushi1.jpg",
        acompanhamento: [
          {
            id: '1',
            titulo: "Escolha sua base",
            obg: false,
            produtos: [
              {
                id: "1",
                titulo: "Temaky",
                descricao: "and more recently with desktop publishing software like Aldus PageMaker",
                preco: null,
                imagem: "/assets/img/pratos/sushi1.jpg"
              }
            ]
          },
          {
            id: '2',
            titulo: "Bebida",
            obg: false,
            produtos: [
              {
                id: "1",
                titulo: "Temaky",
                descricao: "and more recently with desktop publishing software like Aldus PageMaker",
                preco: null,
                imagem: "/assets/img/pratos/sushi1.jpg"
              }
            ]
          }
        ]
      },
      {
        id: "4",
        titulo: "Combo Família",
        descricao: "and more recently with desktop publishing software like Aldus PageMaker",
        preco: 80.9,
        qtdPessoas: 4,
        imagem: "/assets/img/pratos/sushi1.jpg"
      }
    ]
  },
  {
    id: "combo-casal",
    titulo: "Combo Casal",
    produtos: [
      {
        id: "5",
        titulo: "Combo Casal 1",
        descricao: "and more recently with desktop publishing software like Aldus PageMaker",
        preco: 80.9,
        qtdPessoas: 2,
        imagem: "/assets/img/pratos/sushi1.jpg"
      },
      {
        id: "6",
        titulo: "Combo Casal 2",
        descricao: "and more recently with desktop publishing software like Aldus PageMaker",
        preco: 80.9,
        qtdPessoas: 2,
        imagem: "/assets/img/pratos/sushi1.jpg"
      },
      {
        id: "7",
        titulo: "Combo Casal 3",
        descricao: "and more recently with desktop publishing software like Aldus PageMaker",
        preco: 80.9,
        qtdPessoas: 2,
        imagem: "/assets/img/pratos/sushi1.jpg"
      }
    ]
  }
]
