import Houselogo from "../images/logo sort liten.svg"
import {Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <section className="topbanner">
                {/* <div className="info houselogo"> <Houselogo /></div> */}
                <div className="info">Telefon: <a href="tel:+47 965 05 401">+47 965 05 401</a></div>
                <div className="info">Epost: <a href="mailto:post@houseofsingles.no">post@houseofsingles.no</a></div>
                <div className="info addr">Adresser: 
                <a href="https://goo.gl/maps/fSHj6NUbWP84qTHT9">Kirkegata 15, 0153 Oslo</a>
                 <span>|</span> 
                <a href="https://g.page/kloverhuset?share">Kløverhuset 2etg, Bergen</a>
                </div>
            </section>

        </header>
    )
}

export default Header;