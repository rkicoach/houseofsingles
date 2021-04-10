// @refresh reset

// Importing "react" is still required when using methods from it
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Houselogo from "../images/logo sort liten.svg"


const Nav = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = e => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    }

    return (
        <header className="mobile-nav">
            <div className="logo">
                <Link to="/">
                    <Houselogo className="houselogo"/>
                </Link>
            </div>

            <nav className="nav">
                <i
                    className="fa fa-bars"
                    aria-hidden="true"
                    onClick={e => handleToggle(e)}
                />
                <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                    <li><Link to="/">Hjem</Link></li>
                    <li><Link to="/inspirasjon">Inspirasjon</Link></li>
                    <li><Link to="/Dress">Dress</Link></li>
                    <li><Link to="/Bryllup">Bryllup</Link></li>
                    <li><Link to="/Bedriftsavtale">Bedriftsavtale</Link></li>
                    <li><Link to="/Skredding">Skredding</Link></li>
                    <li><Link to="/omoss">Om Oss</Link></li>
                </ul>
            </nav>


        </header>
    );
};

export default Nav;