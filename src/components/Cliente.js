import React from 'react'
export default function Cliente({cliente, clienteend}) {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-2xl uppercase font-bold mb-1">{cliente}</h2>
        <p>{clienteend}</p>
      </section>
    </>
  )
}
