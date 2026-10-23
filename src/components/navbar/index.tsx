import { Perfil } from "../../structs/index";

const links = [
    { url: "#about", title: "Quem Sou" },
    { url: "#projeto", title: "Meus Projetos" },
    { url: "#contato", title: "Contato" },
];

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__inner">
                <a href="#about" className="navbar__brand" title="Carlos Eduardo">Carlos Eduardo</a>
                <ul className="navbar__links">
                    {
                        links.map(
                            (link, index) =>
                                <li key={index}>
                                    <a href={link.url} title={link.title}>{link.title}</a>
                                </li>
                        )
                    }
                </ul>
                <a className="navbar__github" href={Perfil.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </nav>
    );
};

export default Navbar;
