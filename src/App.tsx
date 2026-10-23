import Navbar from "./components/navbar";
import AboutComponent from "./components/about";
import ProjetoComponent from "./components/projeto";
import DetalheContatoComponent from "./components/contato";
import { Perfil } from "./structs/index";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <AboutComponent />
                <ProjetoComponent />
                <DetalheContatoComponent />
            </main>
            <footer className="footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} {Perfil.nome} — {Perfil.cargo}</p>
                    <p>Feito com React, TypeScript e muito café.</p>
                </div>
            </footer>
        </>
    );
}

export default App;
