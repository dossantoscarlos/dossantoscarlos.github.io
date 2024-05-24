import { Contato } from '../../structs/index'; 
import githubIcon from '../../assets/github_PNG40.png';

const DetalheContatoComponent = () => {
    
    return (
        <>
            <div id="contato">
                <h3>Contato</h3>   
                <p>Nome: Carlos Eduardo</p>
                <p>Email: { Contato.email} </p>
                <p>Telefone: {Contato.telefone}</p>
                <p>
                    <img src={githubIcon} alt='github icon' width={16} height={16} />
                    <a href={Contato.github}>Github</a>
                </p>
            </div>
        </>
    );
}

export default DetalheContatoComponent;