import Header from "../components/Header";
import "../assets/css/Asie.css";
import Spline from "@splinetool/react-spline";

import Cobra from "../assets/img/png/COBRA.png";
import Leopard from "../assets/img/png/LÉOPARD DE NEIGE.png";
import Panda from "../assets/img/png/PANDA.png";
import RedPanda from "../assets/img/png/PANDA ROUX.png";


import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer";

import Devinette2 from "../components/Devinette2";

import { motion } from "framer-motion";


const Asie = () => {
    return (
        <div className="asie-body">
            <header>
                <Header/>
            </header>
            <div className="gallerie">
                <h1>À Propos de l'Asie</h1>
                <p>On vous présente le continent le plus diversifié du monde entier.</p>
                <p className="paragraphe">
                L'Asie est un continent d'une richesse incommensurable,
                où la nature, la culture et l'histoire se mêlent pour créer un tableau fascinant et diversifié.
                De ses paysages époustouflants à ses traditions anciennes, l'Asie offre une
                expérience inoubliable à ceux qui ont la chance de l'explorer.
                </p>
                <motion.div className="categories" initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}>
                    <div className="item">
                    <span class="material-icons">
                    store
                    </span>
                        <p>Des établissements éblouissants</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                       forest
                      </span>
                        <p>Continents en expansion</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                        ramen_dining
                       </span>
                        <p>De la cuisine exotique</p>
                    </div>
                </motion.div>
                <div className="module">
                   <Spline scene="https://prod.spline.design/6EAeMRUiv3WGgaSM/scene.splinecode" />
                </div>
                <article className="animaux-container">
                    <div className="animaux-header">
                        <h1>Quelques animaux de cette région</h1>
                        <p>Voici un courte présentation des animaux du continent de l'afrique - cliquez pour en savoir plus sur chaque animal qui attire votre attention !</p>
                    </div>
                    <div className="animal-container">
                    <div className="animal">

                        <div className="image">
                            <img src={Cobra} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>Le cobra</h3>
                            <p>Le cobra, connu pour sa capacité à projeter du venin lorsqu'il chasse une proie, est surnommé "Cobra Cracheur". Il possède un cou dilatable avec un motif de lunettes - ce qui lui vaut son autre surnom : "Serpent à lunettes".</p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Panda} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>Le panda</h3>
                            <p>Ce mammifère fétiche de l'Asie est connu pour son pelage noir et blanc, vivant à haute altitude entre 1000 et 4000 mètres en Inde et en Chine. Malgré qu'il mange beaucoup de bambou, cet animal fait actuellement partie des carnivores.</p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={RedPanda} alt="" />
                        </div>
                        
                        <div className="info">
                            <h3>Le panda roux</h3>
                            <p>Cet animal, aussi appélé "Panda éclatant" pour son pelage unique, est une espèce protégée car il est en voie d'extinction. Originaire de l'Himalaya, le panda roux adore vivre dans les forêts montagneuses. </p>
                        </div>
                        
                        
                    </div>
                    <div className="animal">
                        
                        <div className="image">
                            <img src={Leopard} alt="" />
                        </div>

                        <div className="info">
                            <h3>Le léopard des neiges</h3>
                            <p>Le léopard des neiges, 
                               est le seul mammifère vivant dans le froid de la
                               Haute-Asie.Il est très populaire grâce à ses
                               capacités à se cammoufler en s'adaptant
                               à son territoire. 
                               Il est capable de disparaître
                               de notre oeil humain en quelques minutes.</p>
                        </div>
                        
                        
                    </div>
 
                    </div>
                    

                </article>
            </div>
             <Devinette2/>
            <Footer/>
            <ScrollToTop top={0} smooth />
        </div>
    )
}
export default Asie;