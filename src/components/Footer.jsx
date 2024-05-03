
import { Link } from "react-router-dom";
import Logo from "../assets/img/svg/logo.svg";
import "../assets/css/Footer.css";

const Footer = () => {
    return (
        <footer>
            
            <div className="image">
                  <img src={Logo} alt="" />  
                </div>
                
            <span>Avesia</span>
            <div className="main">
                <p>Ce projet à été créé et illustré par Dalyane Bélanger</p>
                <p>Techniques d'intégration multimédia</p>
                <p>Cégep de Saint-Jérôme</p>
                
                
                
            </div>
        </footer>
    )
}
export default Footer;