import Header from "../components/Header";
import "../assets/css/Amerique.css";
import Spline from "@splinetool/react-spline";

import Bison from "../assets/img/png/BISON.png";
import Caribou from "../assets/img/png/CARIBOU.png";
import Coyote from "../assets/img/png/COYOTE.png";
import Lynx from "../assets/img/png/LYNX.png";


import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer";

const Amerique = () => {
    return (
        <div className="amerique-body">
              <header>
                <Header/>
              </header>
              <div className="gallerie">
                <h1>À Propos de l'Amérique</h1>
                <p>On vous présente le continent le plus riche en faune et flore.</p>
                <p className="paragraphe">
                L'Amérique est un continent d'une diversité époustouflante,
                s'étendant des glaciers du Grand Nord aux forêts tropicales d'Amazonie,
                en passant par les vastes plaines des Prairies et les sommets enneigés des Andes.
                Sa faune et sa flore reflètent cette diversité,
                offrant une incroyable variété d'habitats et d'espèces.
                </p>
                <div className="categories">
                    <div className="item">
                    <span class="material-icons">
                      flight_takeoff
                    </span>
                        <p>Des territoires vastes</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                      travel_explore
                      </span>
                        <p>L'industrie touristique</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                       domain_add
                       </span>
                        <p>Des monuments légendaires</p>
                    </div>
                </div>
                <div className="module">
                  <Spline scene="https://prod.spline.design/u4o61oaDuuKnZyw1/scene.splinecode" />
                </div>
                <article className="animaux-container">
                    <div className="animaux-header">
                        <h1>Quelques animaux de cette région</h1>
                        <p>Voici un courte présentation des animaux du continent de l'afrique - cliquez pour en savoir plus sur chaque animal qui attire votre attention !</p>
                    </div>
                    <div className="animal-container">
                    <div className="animal">

                        <div className="image">
                            <img src={Caribou} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>Le caribou</h3>
                            <p>Faisant plus de 2 mètres, le caribou des bois est une espèce de mammifères vulnérables.
                                Malgré leur carure imposante, Ils possèdent une grande endurance,
                                alors qu'ils peuvent courir des kilomètres afin
                                d'échapper aux insectes volants qui veulent se nourrir d'eux.</p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Coyote} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>Le coyote</h3>
                            <p>Le coyote, connu pour sa présence fréquentes dans les villes
                                peuplées et dans la campagne, est conscidéré comme une espèce
                                capable de s'adapter et de se développer dans des régions
                                modifiées par les être humains.</p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Bison} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>Le bison</h3>
                            <p>Ce mammifère, connu pour sa grande stature et sa carure,
                                est capable de flairer des odeurs à plus de
                                3 kilomètres de distance. Le bison parcourait
                                l'Amérique du Nord autrefois, le pays y comptait plus
                                de 70 millions de bisons dans les années 1800 - alors qu'aujourd'hui, cette même espèce est menacée de s'éteindre.</p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Lynx} alt="" />
                        </div>

                        <div className="info">
                            <h3>Le lynx</h3>
                            <p>Connu par leurs larges oreilles triangulaires,
                                le Lynx fait partie de la famille des félinés.
                                L'habitat préféré des lynx est la forêt boréale,
                                faisant d'eux un prédateur répandu dans l'Hémisphère Nord,
                                puisqu'ils sont très répandus en tant qu'espèce.</p>
                        </div>
                        
                        
                    </div>
 
                    </div>
                    

                </article>
            </div>

            <Footer/>

            <ScrollToTop top={0} smooth />
        </div>
    )
}
export default Amerique;