// import AboutComponent from "./components/about"
// import DetalheContatoComponent from "./components/contato"
// import ProjetoComponent from "./components/projeto"
import Engrenagem from "./assets/engrenagem.gif"

function App () {
  return( 
    <>
      {/* <AboutComponent></AboutComponent>
      <ProjetoComponent></ProjetoComponent>
      <DetalheContatoComponent></DetalheContatoComponent> */}
      <div>
        <img src={Engrenagem} alt="engrenagem" width={400}/><h1>Em manutenção</h1>
      </div>
    </>
  )
}

export default App
