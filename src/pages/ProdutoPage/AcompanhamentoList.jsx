import AcompanhamentoItem from './AcompanhamentoItem'

export default function AcompanhamentoList({ acompanhamentos }) {
  if (!acompanhamentos?.length) return null

  return (
    <>
      {acompanhamentos.map(ac => (
        <AcompanhamentoItem key={ac.id} acompanhamento={ac} />
      ))}
    </>
  )
}
