import "../assets/css/CarteSeule.css";
import Arriere from "../assets/img/jpg/Afrique/back.jpg";

const CarteSeule = ({ carte, faireChoix, tournee, disabled}) => {

    const clic = () => {
        if(!disabled)
        faireChoix(carte);
    }
    return (
        <div className= "carte">

                <div className={tournee ? "tournee": ""}>
                    <img className= "devant" src={carte.src} alt="carte-avant" />
                    <img className="derriere" 
                    src={Arriere} 
                    onClick={clic} 
                    alt="carte-derriere" />
                </div>
        </div>
    )
}
export default CarteSeule;