import { useState } from 'react';
import Colaborador from "./components/Colaborador"
import Datas from "./components/Datas"
import Cabeçalho from "./components/Cabeçalho"
import Cliente from "./components/Cliente"
import Comentarios from "./components/Comentarios"
import Rodape from "./components/Rodape"
import Tabela from "./components/Tabela"
import "./components/tableped.css"



function App() {
  
  const [showInvoice, setShowInvoice] = useState(false);
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [banco, setBanco] = useState("")
  const [cliente, setCliente] = useState("")
  const [conta, setConta] = useState("")
  const [website, setWebsite] = useState("")
  const [clienteend, setClienteEnd] = useState("")
  const [pedidonum, setPedidoNum] = useState("")
  const [pedidodata, setPedidoData] = useState("")
  const [pedidovenc, setPedidoVenc] = useState("")
  const [comentarios, setComentarios] = useState("")
  const [colaborador, setColaborador] = useState("")
  const [cargo, setCargo] = useState("")

const handlePrint = () => {
  window.print ()
  }

  
return (
      <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white
      rounded shadow ">
      {showInvoice ? (
      <div>
      <Cabeçalho handlePrint={handlePrint}/>
      <Colaborador colaborador={colaborador} cargo={cargo} email={email}/>
      <Cliente cliente={cliente} clienteend={clienteend} />
      <Datas pedidodata={pedidodata} pedidovenc={pedidovenc} pedidonum={pedidonum}/>
      <Tabela/>
      <Comentarios comentarios={comentarios}/>
      <Rodape cliente={cliente} email={email} website={website} colaborador={colaborador} conta={conta}
      banco={banco} telefone={telefone}/>
      <button onClick={() => setShowInvoice(false)} className='mt-2 bg-green-500 text-white
      font-bold py-2 px-8 rounded shadow border-2
      border-green-500 hover:bg-transparent hover:text-green-500
      transition-all duration-300'>Editar Pedido</button>
      </div>
       ) : (
      <div className="flex flex-col justify-center ">
        <article className='md:grid grid-cols-2 gap-10'>
        <div className='flex flex-col'>
        <label htmlFor='colaborador'>Nome</label>
      <input 
      type='text'
      colaborador='colaborador'
      id='colaborador'
      placeholder='Digite seu Nome'
      autoComplete='off'
      value={colaborador}
      onChange={(e) => setColaborador (e.target.value)}
      />
        </div> 
        <div>
        <label htmlFor='cargo'>Cargo</label>
      <input 
      type='text'
      cargo='cargo'
      id='cargo'
      placeholder='Digite seu Cargo'
      autoComplete='off'
      value={cargo}
      onChange={(e) => setCargo (e.target.value)}
      />
        </div>
        </article>
        <article className='md:grid grid-cols-3 gap-10'>
      <div className="flex flex-col">
      <label htmlFor='email'>Email</label>
      <input 
      type='email'
      email='email'
      id='email'
      placeholder='Digite seu Email'
      autoComplete='off'
      value={email}
      onChange={(e) => setEmail (e.target.value)}
      />
      </div>
      <div className="flex flex-col">
      <label htmlFor='website'>Website</label>
      <input 
      type='url'
      website='website'
      id='website'
      placeholder='Website'
      autoComplete='off'
      value={website}
      onChange={(e) => setWebsite (e.target.value)}
      />
      </div>
      <div className="flex flex-col">
      <label htmlFor='telefone'>Telefone</label>
      <input 
      type='text'
      telefone='telefone'
      id='telefone'
      placeholder='Digite seu telefone'
      autoComplete='off'
      value={telefone}
      onChange={(e) => setTelefone (e.target.value)}
      />
          </div>
        </article>
      



     
      <label htmlFor='banco'>banco</label>
      <input 
      type='text'
      banco='banco'
      id='banco'
      placeholder='Digite seu banco'
      autoComplete='off'
      value={banco}
      onChange={(e) => setBanco (e.target.value)}
      />
      <label htmlFor='conta'>Conta</label>
      <input 
      type='text'
      conta='conta'
      id='conta'
      placeholder='Conta'
      autoComplete='off'
      value={conta}
      onChange={(e) => setConta (e.target.value)}
      />
      <label htmlFor='cliente'>Nome do Cliente</label>
      <input 
      type='text'
      cliente='cliente'
      id='cliente'
      placeholder='Nome do cliente'
      autoComplete='off'
      value={cliente}
      onChange={(e) => setCliente(e.target.value)}
      />
      <label htmlFor='clienteend'>Endereço do cliente</label>
      <input 
      type='text'
      clienteend='clienteend'
      id='clienteend'
      placeholder='Cliente endereço'
      autoComplete='off'
      value={clienteend}
      onChange={(e) => setClienteEnd (e.target.value)}
      />
      <label htmlFor='pedidonum'>Pedido Numero</label>
      <input 
      type='text'
      pedidonum='pedidonum'
      id='pedidonum'
      placeholder='Digite seu pedido'
      autoComplete='off'
      value={pedidonum}
      onChange={(e) => setPedidoNum (e.target.value)}
      />
       <label htmlFor='pedidodata'>Pedido Data</label>
      <input 
      type='date'
      pedidodata='pedidodata'
      id='pedidodata'
      placeholder='Digite seu endereço'
      autoComplete='off'
      value={pedidodata}
      onChange={(e) => setPedidoData (e.target.value)}
      />
      <label htmlFor='pedidovenc'>Pedido Vencimento</label>
      <input 
      type='date'
      pedidovenc='pedidovenc'
      id='pedidovenc'
      placeholder='Digite seu endereço'
      autoComplete='off'
      value={pedidovenc}
      onChange={(e) => setPedidoVenc (e.target.value)}
      />
      <label htmlFor='comentarios'>Comentarios</label>
      <textarea comentarios="comentarios" id='comentarios' cols="30" rows="10"
      placeholder='Comentarios' value={comentarios} 
      onChange={(e) => setComentarios (e.target.value)}></textarea>
       
      <button onClick={() => setShowInvoice(true)} 
      className='bg-blue-500 text-white
      font-bold py-2 px-8 rounded shadow border-2
      border-blue-500 hover:bg-transparent hover:text-blue-500
      transition-all duration-300'>Pedido Anterior</button>
      </div>
      
      
      
      )}
      </main>     
            
    </>
  )
}

export default App;
