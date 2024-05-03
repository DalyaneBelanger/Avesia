import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import Logo from "../assets/img/svg/logo.svg";



import { motion } from "framer-motion";

const Header = () => {
    return (
        
          <motion.header
          initial={{ x: "20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-20%", opacity: 0, transition: { duration: 0.2 } }}
          transition={{ delay: 0, duration: 1 }}>
            <div className="barre-haut">
                <div className="icone-barre">
                    <a href="#"><img src="" alt="" />
                    <span class="material-icons">
                      menu
                    </span>
                    </a>
                </div>
                <div className="titre-site">
                    <Link to="/home"><h2>Avesia</h2></Link>
                    
                </div>
                <div className="credit">
                    <Link to="/credits"> Dites Bonjour ! </Link>
                </div>
                
            </div>
            <div className="logo">
                <p>Appréciez la beauté de la faune sauvage.</p>
                <img src={Logo} alt="" />
            </div>
            
            <div className="menu">
                <ul>
                    <li><Link to="/afrique">L'Afrique</Link></li>
                    <li><Link to="/asie">L'Asie</Link></li>
                    <li><Link to="/antarticque">L'Antarticque</Link></li>
                    <li><Link to="/oceanie">L'Océanie</Link></li>
                    <li><Link to="/amerique">L'Amérique</Link></li>
                </ul>
            </div>





          </motion.header>
        
    )
}

export default Header;