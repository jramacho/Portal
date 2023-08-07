import React from 'react'

export default function Colaborador({colaborador, cargo}) {
  return (
    <>
    <section className="flex flex-col items-end justify-end">
      <h2 className="font-bold text-3xl uppercase mb-1">{colaborador}</h2>
      <p>{cargo}</p>
    </section>
  </>
  )
}
