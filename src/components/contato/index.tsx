import { Contato } from "../../structs/index";
import githubIcon from "../../assets/github_PNG40.png";

const DetalheContatoComponent = () => {
    return (
        <section id="contato" className="contato">
            <div className="container">
                <div className="secao__header">
                    <h2>Contato</h2>
                    <p>Interessado em um projeto ou em conversar sobre tecnologia? Estou disponível.</p>
                </div>
                <div className="contato__lista">
                    <div className="contato__item">
                        <div className="contato__icone">
                            <img src={githubIcon} alt="GitHub" width={22} height={22} />
                        </div>
                        <div className="contato__info">
                            <span>GitHub</span>
                            <a href={Contato.github} target="_blank" rel="noreferrer">dossantoscarlos</a>
                        </div>
                    </div>
                    <div className="contato__item">
                        <div className="contato__icone">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
                        </div>
                        <div className="contato__info">
                            <span>E-mail</span>
                            <a href={"mailto:" + Contato.email}>{Contato.email}</a>
                        </div>
                    </div>
                    <div className="contato__item">
                        <div className="contato__icone">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        </div>
                        <div className="contato__info">
                            <span>WhatsApp</span>
                            <a href={Contato.whatsapp} target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
                        </div>
                    </div>
                    <div className="contato__item">
                        <div className="contato__icone">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <div className="contato__info">
                            <span>Telefone</span>
                            <a href={"tel:" + Contato.telefone.replace(/[^0-9+]/g, "")}>{Contato.telefone}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetalheContatoComponent;
