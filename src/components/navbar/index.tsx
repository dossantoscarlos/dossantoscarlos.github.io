const Navbar = () => {

    const link = [
        {url: "#about", title: "Quem sou"},
        {url: "#projeto", title: "Meus Projetos"},
        {url: "#contado", title: "Contato"}
    ];

    return (
        <>
            <ul>
                {
                    link.map(
                        (arr, index) => 
                            <li key={index}>
                                <a href={arr.url} title={arr.title}>{arr.title}</a>
                            </li>
                        )
                }
            </ul>
        </>
    )
};

export default Navbar;

