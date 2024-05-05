import Header from "../components/Header";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import JeuMemoire1 from "../components/JeuMemoire1";

import Toucan from "../assets/img/jpg/toucan.jpg";

import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer";

import Smoke from "../assets/img/png/smoke.png";
import Jeep from "../assets/img/png/jeep.png";



  


const Home = () => 
{
   return (
     <div className="home">
        <div className="header">
           <Header/>
        </div>
        <div className="presentation">
            <h2>Qu'est-ce qu'Avesia ?</h2>
            <p>Avesia est un système d'exploration et de développement
                de l'information concernant nos amis les animaux sauvages à travers le monde.
                Cet organisme est un moyen d’apprécier la nature de manière virtuelle et d'en apprendre
                davantage sur chaque espèce présente dans l'expédition.
            
                Bien sûr, ce qui est illustré est moins réaliste,
                car il s'agit d'une simulation qui permet de visualiser ce
                que le monde peut offrir grâce à la technologie et au contenu multimédia,
                dans le cadre d'une durée limitée.
 
            </p>
            <p>
                Les modules 3D illustrés
                à l'intérieur du site web sont
                divisés en 5 régions, chacune étant dotée de 4 animaux.
                Vous pouvez explorer à votre guise, et il y a quelques petites
                interactions à découvrir si vous observez attentivement autour de vous.
            </p>
            <span>Maintenant, explorez le site, cliquez sur l'exposition qui vous intéresse le plus et amusez-vous !</span>
        </div>
        <div className="home-main">
            <div className="expedition">
                <article className="bulle">
                    <h2>Ce que propose l'expédition</h2>
                <p>Explorez les 5 continents et découvrez les animaux qui les habitent.</p>
                </article>
                

                <div className="expedition-container">

                    <div className="texte">
                        <h3>L'Afrique <span> Safari au Cœur Sauvage </span> </h3>
                        <Link to="/afrique">Voir</Link>
                    </div>
                    <div className="module">
                       <Spline scene="https://prod.spline.design/SFH8QBjAXU6HXAvH/scene.splinecode" />
                    </div>

                    

                </div>

                <div className="expedition-container">

                    <div className="texte">
                        <h3>L'Articque<span>Au confins glacés</span></h3>
                        <Link to="/afrique">Voir</Link>
                    </div>
                    <div className="module">
                        <Spline scene="https://prod.spline.design/U56mrvToBOFBKNGJ/scene.splinecode" />
                    </div>

                    

                </div>

                <div className="expedition-container">

                    <div className="texte">
                        <h3>L'Asie <span> Odyssée Orientale et Mystérieuse</span> </h3>
                        <Link to="/afrique">Voir</Link>
                    </div>
                    <div className="module">
                       <Spline scene="https://prod.spline.design/CMjc6XGvikYEXy62/scene.splinecode" />
                    </div>

                    

                </div>

                <div className="expedition-container">

                    <div className="texte">
                        <h3>L'Océanie<span> Découverte des îles perdues</span> </h3>
                        <Link to="/afrique">Voir</Link>
                    </div>
                    <div className="module">
                        <Spline scene="https://prod.spline.design/vQlg94XSoCWZWcHU/scene.splinecode" />
                    </div>

                    

                </div>

                <div className="expedition-container">

                    <div className="texte">
                        <h3>L'Amérique<span>L'Exploration des Grandes Étendues</span> </h3>
                        <Link to="/afrique">Voir</Link>
                    </div>
                    <div className="module">
                        <Spline scene="https://prod.spline.design/R8EKN0r78wDhLQIS/scene.splinecode" />
                    </div>

                    

                </div>

                <div className="scroll-container">
                    <div className="texte">
                        Instruisez-vous d'une façon éclair ! <br />
                    </div>
                </div>


                <div className="separateur">

                    <div className="image">
                        <img src={Smoke} alt="" />
                        <img src={Jeep} alt="" />
                    </div>

                </div>

                <div className="information">
                    <article>
                        <h3>En plus de vous instruire par le bias de modules 3D, il y a des petits jeux qui n'attendent que vous !</h3>
                        <p>Il y a un jeu de mémoire juste ici et des devinettes dans chaque continent
                            - Allez tester vos connaissances si vous le souhaitez !
                        </p>
                        <div className="jeu">
                            <JeuMemoire1/>
                        </div>
                    </article>
                </div>
            </div>
        </div>

        <Footer/>

        <ScrollToTop top={0} smooth />
     </div>
   )
}
export default Home;