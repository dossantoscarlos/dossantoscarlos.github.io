import { Contato, Perfil } from "../../structs/index";

const AboutComponent = () => {
    return (
        <section id="about" className="sobre">
            <div className="container hero">
                <div className="hero__info">
                    <span className="hero__badge">Especialista em Aplicações Web</span>
                    <h1 className="hero__nome">{Perfil.nome}</h1>
                    <h2 className="hero__cargo">{Perfil.cargo}</h2>
                    <p className="hero__bio">{Perfil.bio}</p>
                    <p className="hero__localizacao">{Perfil.localizacao}</p>
                    <div className="hero__actions">
                        <a className="btn btn--primario" href={Perfil.github} target="_blank" rel="noreferrer">Acessar GitHub</a>
                        <a className="btn btn--secundario" href="#contato">Fale comigo</a>
                    </div>
                    <div className="hero__redes">
                        <a className="hero__social" href={Perfil.github} target="_blank" rel="noreferrer">GitHub</a>
                        {
                            Contato.linkedin !== "" &&
                            <a className="hero__social" href={Contato.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                        }
                        <a className="hero__social" href={"mailto:" + Contato.email}>E-mail</a>
                        <a className="hero__social" href={Contato.whatsapp}>WhatsApp</a>
                    </div>
                </div>
                <div className="hero__avatar">
                    <img src={Perfil.avatarUrl} alt={Perfil.nome} />
                </div>
            </div>
        </section>
    );
};

export default AboutComponent;
