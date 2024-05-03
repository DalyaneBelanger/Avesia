import Header from "../components/Header";
import JeuMemoire1 from "../components/JeuMemoire1";
import "../assets/css/Afrique.css";
import Spline from "@splinetool/react-spline";
import Devinette from "../components/Devinette";

import Lion from "../assets/img/png/LION.png";
import Elephant from "../assets/img/png/ÉLÉPHANT.png";
import Girafe from "../assets/img/png/GIRAFE.png";
import Zebre from "../assets/img/png/ZEBRE.png";

import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

const Afrique = () => {
    return (
        <div className="afrique-body">
            
            <header>
                <Header/>
            </header>
            <div className="gallerie">
                <h1>À Propos de l'Afrique</h1>
                <p>On vous présente le continent le plus chaud et humide du globe.</p>
                <p className="paragraphe">
                L'Afrique est un continent d'une diversité extraordinaire,
                tant sur le plan culturel que naturel.
                Ses vastes paysages abritent une richesse incroyable en termes de faune et de flore,
                faisant de ce continent un véritable paradis pour les amoureux de la nature.
                L'afrique, de son charme culturel et sa chaleur, a beaucoup de choses à montrer :
                </p>
                <motion.div className="categories"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}} >
                    <div className="item">
                    <span class="material-icons">
                        emoji_nature
                    </span>
                        <p>Une faune intéressante</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                        soup_kitchen
                    </span>
                        <p>La cuisine exotique</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                        landscape
                    </span>
                        <p>Des paysages merveilleux</p>
                    </div>

                    
                </motion.div>
                <div className="module">
                    <Spline scene="https://prod.spline.design/YXf8VT2d-knNIF-9/scene.splinecode" />
                </div>
                <article className="animaux-container">
                    <div className="animaux-header">
                        <h1>Quelques animaux de cette région</h1>
                        <p>Voici un courte présentation des animaux du continent de l'Afrique.</p>
                    </div>
                    <div className="animal-container">
                    <div className="animal">

                        <div className="image">
                            <img src={Lion} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>Le lion</h3>
                            <p>Le lion, originaire de l'afrique, est communément appelé le roi de la jungle.
                                Sa caractéristique physique principale est sa crinière majestueuse et
                                ses pattes impressionnates.</p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Zebre} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>Le zèbre</h3>
                            <p>Le zèbre, reconnu de ses taches particulières de son pelage,
                                est un herbivore qui est originaire de l'Afrique.</p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">

                        <div className="image">
                            <img src={Girafe} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>La girafe</h3>
                            <p> La girafe, reconnue par son long cou et sa langue d'une couleur
                                violette, est considéré comme l'animal le plus grand au monde.</p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Elephant} alt="" />
                        </div>

                        <div className="info">
                            <h3>L'éléphant</h3>
                            <p> L'éléphant, connu pour sa trompe curieuse et ses longues défenses,
                                est l'un des mammifères les plus lourds sur la planète.
                                Ils ont également populaires pour leur abilité à
                                ne jamais oublier les visages des gens qu'ils croisent.</p>
                        </div>
                        
                        
                    </div>
 
                    </div>
                    

                </article>
            </div>
            
            <div className="jeu">
                <Devinette/>
            </div>

            <Footer/> 
            <ScrollToTop top={0} smooth />
        </div>
    )
}
export default Afrique;