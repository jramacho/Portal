import React from 'react'

export default function Rodape({cliente, email, website, colaborador, conta,
  banco,telefone,}) {
  return (
 <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Your name:</span> {colaborador}
          </li>
          <li>
            <span className="font-bold">Your email:</span> {email}
          </li>
          <li>
            <span className="font-bold">Phone number:</span> {telefone}
          </li>
          <li>
            <span className="font-bold">Bank:</span> {banco}
          </li>
          <li>
            <span className="font-bold">Account holder:</span> {cliente}
          </li>
          <li>
            <span className="font-bold">Account number:</span> {conta}
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
