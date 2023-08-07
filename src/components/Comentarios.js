import React from 'react'

export default function Comentarios({comentarios}) {
  return (
    <>
    <section className="mt-10 mb-5">
      <h3>Comentarios para Clientes</h3>
      <p className="lg:w-1/2 text-justify">{comentarios}</p>
    </section>
  </>
  )
}
