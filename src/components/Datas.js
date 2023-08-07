import React from 'react'

export default function Datas({pedidonum, pedidodata, pedidovenc}) {
  return (
    <>
    <article className="mt-10 mb-14 flex items-end justify-end">
      <ul>
        <li className="p-1 ">
          <span className="font-bold">Numero do Pedido:</span> {pedidonum}
        </li>
        <li className="p-1 bg-gray-100">
          <span className="font-bold">Data do Pedido:</span> {pedidodata}
        </li>
        <li className="p-1 ">
          <span className="font-bold">Data de vencimento:</span> {pedidovenc}
        </li>
      </ul>
    </article>
  </>
  )
}
