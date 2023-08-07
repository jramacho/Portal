import React from 'react'

export default function Rodape({cliente, email, website, colaborador, conta,
  banco,telefone,}) {
  return (
 <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Vendedor:</span> {colaborador}
          </li>
          <li>
            <span className="font-bold">Email:</span> {email}
          </li>
          <li>
            <span className="font-bold">Telefone:</span> {telefone}
          </li>
          <li>
            <span className="font-bold">Banco:</span> {banco}
          </li>
          <li>
            <span className="font-bold">Cliente:</span> {cliente}
          </li>
          <li>
            <span className="font-bold">Conta:</span> {conta}
          </li>
          <li>
            <span className="font-bold">Website:</span>{" "}
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </li>
        </ul>
      </footer>
      </>
  )
}
