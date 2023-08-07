import React from 'react'
import { useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
export default function TableForm({descrição, setDescrição, quantidade, setQuantidade,
   preço, setPreço, total, setTotal, list, setList}) {
    const handleSubmit = (e) => {
        e.preventDefault()

    const newItems = {
        id: uuidv4(),
        descrição,
        quantidade,
        preço,
        total
    }
    setDescrição('')
    setQuantidade('')
    setPreço('')
    setTotal('')
    setList([...list, newItems])
    }
    
    useEffect(() => {
        const calculaTotal = (total) => {
        setTotal(quantidade * preço)
    }
    calculaTotal(total)
},[total, preço, quantidade, setTotal])
  return (
    <>
<form onSubmit={handleSubmit}>
<div className='flex flex-col  md:mt-10'>
    <label htmlFor='descrição'>Descrição</label>
  <input 
  type='text'
  descrição='descrição'
  id='descrição'
  placeholder='Descrição'
  autoComplete='off'
  value={descrição}
  onChange={(e) => setDescrição (e.target.value)}
  />
    </div>
    <div className='md:grid grid-cols-3 gap-16'>
    <div className='flex flex-col'>
    <label htmlFor='quantidade'>Quantidade</label>
  <input 
  type='text'
  quantidade='quantidade'
  id='quantidade'
  placeholder='Quantidade'
  autoComplete='off'
  value={quantidade}
  onChange={(e) => setQuantidade (e.target.value)}
  />
    </div>
    <div className='flex flex-col'>
    <label htmlFor='preço'>Preço</label>
  <input 
  type='text'
  preço='preço'
  id='preço'
  placeholder='Preço'
  autoComplete='off'
  value={preço}
  onChange={(e) => setPreço (e.target.value)}
  />
    </div>
    <div className='flex flex-col'>
    <label htmlFor='total'>Total</label>
  <p>{total}</p>
    </div>
    </div>
    <button className='mb-5 bg-blue-500 text-white
      font-bold py-2 px-8 rounded shadow border-2
      border-blue-500 hover:bg-transparent hover:text-blue-500
      transition-all duration-300' type="Adcionar">Adiciona itens</button>
</form>

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
          </tbody></React.Fragment>
        

    ))}
</table>
    </>
  )
}
