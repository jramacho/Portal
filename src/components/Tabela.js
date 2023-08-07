import React from 'react'

export default function Tabela({descrição, quantidade,
   preço, total, list, setList}) {
  return (
    
    <table width="100%" className="mb-10">
      <thead>
        <tr className="bg-gray-100 p-1">
          <td className="font-bold">Descrição</td>
          <td className="font-bold">Quantidade</td>
          <td className="font-bold">Preço</td>
          <td className="font-bold">Total</td>
        </tr>
      </thead>
      {list.map(({id, descrição, quantidade, preço, total}) =>(
        <React.Fragment key={id}>
          <tbody>
            <tr className="h-10">
              <td>{descrição}</td>
              <td>{quantidade}</td>
              <td>{preço}</td>
              <td>{total}</td>
            </tr>
          </tbody>
          </React.Fragment>
          ))}
        </table>
    
  )
}
