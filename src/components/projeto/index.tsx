import { useEffect, useState } from "react";

interface ProjetoGitHub {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    fork: boolean;
}

const CORES_TECNOLOGIA: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    PHP: "#777BB4",
    Python: "#3572A5",
    Go: "#00ADD8",
    SCSS: "#c6538c",
    Vue: "#41b883",
    Lua: "#000080",
    Shell: "#89e051",
    Dockerfile: "#384d54",
};

const ProjetComponent = () => {
    const [projetos, setProjetos] = useState<ProjetoGitHub[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        let ativo = true;

        fetch("https://api.github.com/users/dossantoscarlos/repos?per_page=100&sort=stars")
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error("Não foi possível carregar os projetos.");
                }
                return resposta.json();
            })
            .then((dados: ProjetoGitHub[]) => {
                if (!ativo) return;
                const lista = dados
                    .filter((repo) => !repo.fork && repo.name)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .slice(0, 6);
                setProjetos(lista);
            })
            .catch(() => {
                if (ativo) setErro(true);
            })
            .finally(() => {
                if (ativo) setCarregando(false);
            });

        return () => {
            ativo = false;
        };
    }, []);

    return (
        <section id="projeto" className="projetos">
            <div className="container">
                <div className="secao__header">
                    <h2>Meus Projetos</h2>
                    <p>Uma seleção dos repositórios que movimentam minha carreira e estudam por aqui.</p>
                </div>
                {carregando && (
                    <div className="projetos__skeleton">
                        <div className="skeleton-card" />
                        <div className="skeleton-card" />
                        <div className="skeleton-card" />
                    </div>
                )}
                {erro && (
                    <div className="projetos__erro">
                        <h3>Não foi possível carregar os projetos</h3>
                        <p>Verifique sua conexão com a internet e tente novamente.</p>
                        <a className="btn btn--primario" href="https://github.com/dossantoscarlos?tab=repositories" target="_blank" rel="noreferrer">Ver no GitHub</a>
                    </div>
                )}
                {
                    !carregando && !erro && projetos.length > 0 && (
                        <div className="projetos__grid">
                            {projetos.map((repo) => (
                                <article className="projeto-card" key={repo.id}>
                                    <div className="projeto-card__topo">
                                        <h3><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></h3>
                                        <a className="projeto-card__link" href={repo.html_url} target="_blank" rel="noreferrer">Ver no GitHub</a>
                                    </div>
                                    <p className="projeto-card__descricao">{repo.description ?? "Repositório sem descrição."}</p>
                                    <div className="projeto-card__tags">
                                        {repo.language && (
                                            <span className="tag">
                                                <i style={{ background: CORES_TECNOLOGIA[repo.language] ?? "#8b9bb4" }} />
                                                {repo.language}
                                            </span>
                                        )}
                                    </div>
                                    <div className="projeto-card__rodape">
                                        <span className="estrelas">★ {repo.stargazers_count}</span>
                                        <a className="projeto-card__botao" href={repo.html_url} target="_blank" rel="noreferrer">Código fonte</a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default ProjetComponent;
