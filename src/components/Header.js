import { Link } from "react-router-dom";
import style from "./styleHeader.css"

function Header(){
    return(
        <>
            <header className="cabecalho">
                <div className="meu_nome">
                    <Link className="meu_nome_link" to="/">
                        Felipe Pellissari
                    </Link>
                </div>

                <nav className="navbar">
                    <Link className="navbar_item" to="/">Home</Link>
                    <Link className="navbar_item" to="/">Quem sou eu</Link>
                    <Link className="navbar_item" to="/">Meus projetos</Link>
                    <Link className="navbar_item" to="/">Como fiz isso</Link>
                </nav>
            </header>
        </>
    );
}

export default Header;