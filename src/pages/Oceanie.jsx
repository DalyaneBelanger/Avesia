import Header from "../components/Header";
import "../assets/css/Oceanie.css";
import Spline from "@splinetool/react-spline";

import Autruche from "../assets/img/png/AUTRUCHE.png";
import Koala from "../assets/img/png/KOALA.png";
import Kangourou from "../assets/img/png/KANGOUROU.png";
import Crocodile from "../assets/img/png/CROCODILE.png";

import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer";

import Devinette3 from "../components/Devinette3";

import { motion } from "framer-motion";

const Oceanie = () => {
    return (
        <div className="oceanie-body">
            <header>
                <Header/>
            </header>
            <div className="gallerie">
                <h1>À Propos de l'Océanie</h1>
                <p>On vous présente le continent d'une remarcable biodiversité.</p>
                <p className="paragraphe">
                L'Océanie est un ensemble de pays et d'îles dispersés à travers l'océan Pacifique,
                formant un mélange éclectique de cultures, de paysages et de biodiversité.
                C'est un continent à part entière, bien que souvent moins évoqué que d'autres,
                mais il regorge de richesses naturelles et culturelles uniques.
                </p>
                <motion.div className="categories">
                    <div className="item">
                    <span class="material-icons">
                      sailing
                    </span>
                        <p>Des océans vastes</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                       set_meal
                      </span>
                        <p>Un vie marine abondante</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                       grass
                       </span>
                        <p>Un biodiversité remarquable</p>
                    </div>
                </motion.div>
                <div className="module">
                   <Spline scene="https://prod.spline.design/Apoo8xlj0vlHZw-Q/scene.splinecode" />
                </div>
                <article className="animaux-container">
                    <div className="animaux-header">
                        <h1>Quelques animaux de cette région</h1>
                        <p>Voici un courte présentation des animaux du continent de l'afrique - cliquez pour en savoir plus sur chaque animal qui attire votre attention !</p>
                    </div>
                    <div className="animal-container">
                    <div className="animal">

                        <div className="image">
                            <img src={Autruche} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>L'autruche</h3>
                            <p>Cet oiseau, connu pour sa vitesse surprennante, est le plus gros et le plus grand de son espèce.
                                Ses grandes ailes, ne servent qu'à se défendre des prédateurs ou à se pavaner ou protéger sa progéniture.
                            </p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Koala} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>Le koala</h3>
                            <p>Le koala, de l'espèce des marsupiaux herbivores, est
                                la mascotte préférée des australiens. 
                                Étroitement lié à l'eucalyptus ou gommier,
                                il ne peut manger que des feuilles en particulier pour se nourrir.</p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Crocodile} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>Le crocodile</h3>
                            <p>Vivant uniquement dans les régions chaudes, 
                                le crocodile est parfaitement adapté à sa vie marine. 
                                Il passe le trois quart de ses journées à s'émerger
                                dans l'eau stagnante afin de piéger ses proies.</p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Kangourou} alt="" />
                        </div>

                        <div className="info">
                            <h3>Le kangourou</h3>
                            <p>Capable de faire des sauts en hauteur de 3.30 mètres,
                                le kangourou sait clairement se servir de ses membres
                                afin de semer ses prédateurs. Cet animal est hautement
                                habitué à vivre dans les endroits chauds et humids,
                                ainsi que de supporter la sècheresse.</p>
                        </div>
                        
                        
                    </div>
 
                    </div>
                    

                </article>
            </div>
            <Devinette3/>
            <Footer/>

            <ScrollToTop top={0} smooth />
        </div>
    )
}
export default Oceanie;