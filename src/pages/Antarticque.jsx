import Header from "../components/Header";
import "../assets/css/Antarticque.css";
import Spline from "@splinetool/react-spline";

import Narval from "../assets/img/png/NARVAL.png";
import Pingouin from "../assets/img/png/PINGOUIN.png";
import Ours from "../assets/img/png/OURS POLAIRE.png";
import Otarie from "../assets/img/png/OTARIE.png";

import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer";

import Devinette4 from "../components/Devinette4";

import { motion } from "framer-motion";


const Antarticque = () => {
    return (
        <div className="antarticque-body">
            <header>
                <Header/>
                
            </header>
            <div className="gallerie">
                <h1>À Propos de l'Antarctique</h1>
                <p>On vous présente le continent le plus glacé du monde entier.</p>
                <p className="paragraphe">
                L'Antarctique est un continent unique et mystérieux,
                recouvert à près de 98 % par une épaisse couche de glace,
                en faisant ainsi le continent le plus froid,
                le plus sec et le plus venteux de la planète. Les espèces vivant dans sur ce continent impitoyable sont forcées à s'adapter
                à son climat difficile. Malgré ceci, l'Antarticque a des choses absolument magnifiques à démontrer.
                </p>
                <motion.div className="categories" initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}>
                    <div className="item">
                    <span class="material-icons">
                       landscape
                    </span>
                        <p>Des montagnes gigantesques</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                        severe_cold
                      </span>
                        <p>De la glace à perte de vue</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                        nights_stay
                       </span>
                        <p>De l'obscurité permanente</p>
                    </div>
                </motion.div>
                <div className="module">
                    <Spline scene="https://prod.spline.design/TFR-YL6wrampk5Wv/scene.splinecode" />
                </div>
                <article className="animaux-container">
                    <div className="animaux-header">
                        <h1>Quelques animaux de cette région</h1>
                        <p>Voici une courte présentation des animaux du continent de l'Antarctique.</p>
                    </div>
                    <div className="animal-container">
                    <div className="animal">

                        <div className="image">
                            <img src={Narval} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>Le narval</h3>
                            <p> Ressemblant beaucoup aux baleines et aux dauphins,
                                le narval se distingue cependant avec sa canine supérieure,
                                qui fait office de défense et de détection de ses alentours.</p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Pingouin} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>Le pingouin</h3>
                            <p>Le pingouin, populaire pour son pelage ressemblant à un tuxedo est une espèce d'oiseaux qui vit dans l'hémisphère Nord.
                                Il est l'une des quelques espèces à ne pas savoir voler.</p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Ours} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>L'ours polaire</h3>
                            <p>Ce mammifère omnivore originaire de l'Antarctique,
                                possède un pelage graisseux et épais qui le prot`ge du froid.
                                Il est aussi bon chasseur sous l'eau qu'à l'extérieur. </p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Otarie} alt="" />
                        </div>

                        <div className="info">
                            <h3>L'otarie</h3>
                            <p>Ce mammifère marin, doté de quatres nageoires
                                qu'il utilise pour se déplacer sur terre et se propulser sous l'eau,
                                est l'animal le plus lourd de son espèce.</p>
                        </div>
                        
                        
                    </div>
 
                    </div>
                    

                </article>
            </div>
            <Devinette4/>

            <Footer/>

            <ScrollToTop top={0} smooth />
        </div>
    )
}
export default Antarticque;