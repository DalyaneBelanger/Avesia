import Header from "../components/Header";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import JeuMemoire1 from "../components/JeuMemoire1";

import Toucan from "../assets/img/jpg/toucan.jpg";

import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer";


  


const Home = () => 
{
   return (
     <div className="home">
        <div className="header">
           <Header/>
        </div>
        <main>
            <article className="presentation">
                <div className="title">
                   <h2>Qu'est-ce qu'Avesia ?</h2>
                <span>Qu'est-ce qu'Avesia ?</span> 
                </div>
                
            <p>
            Avesia est un système d'exploration et de développement de
            l'information concernant nos amis
            les animaux sauvages à travers le monde.
                
            Cet organisme est un moyen 
            d’apprécier la nature de manière virtuelle
            et d'en apprendre davantage sur chaque
            espèce présente dans l'expédition.
            </p>
            <p>
              Bien sûr, ce qui est illustré est moins réaliste,
              car il s'agit d'une simulation qui permet de visualiser
              ce que le monde peut offrir grâce à la technologie et
              au contenu multimédia, dans le cadre d'une durée limitée.

            </p>
            <p>Les modules 3D illustrés
                à l'intérieur du site web sont divisés en 5 régions,
                chacune étant dotée de 4 animaux. Vous pouvez explorer à votre guise,
                et il y a quelques petites interactions à découvrir
                si vous observez attentivement autour de vous.
            </p>
            <span>Maintenant parcourez les sections ci-dessous et cliquez sur celles qui vous intéressent !</span>
            </article>
            <article>
                <h2>Ce que propose l'expédition</h2>
                <div className="boite">
                    <div className="nom">
                       <h3>L'expédition du désert d'Afrique</h3>
                       <Link to="/afrique">Voir</Link> 
                    </div>
                    <div className="module">
                     <Spline scene="https://prod.spline.design/SFH8QBjAXU6HXAvH/scene.splinecode" />
                        
                    </div>
                
                    
                </div>
                <div className="boite">
                    <div className="nom">
                        <h3>L'expédition glacée de l'Antarticque</h3>
                        <Link to="/antarticque">Voir</Link>
                    </div>
                    <div className="module">
                       <Spline scene="https://prod.spline.design/U56mrvToBOFBKNGJ/scene.splinecode" />
                    </div>
                    
                </div>
                    <div className="boite">
                    <div className="nom">
                        <h3>L'expédition de l'ambitieuse Asie</h3>
                        <Link to="/asie">Voir</Link>
                    </div>
                    <div className="module">
                        <Spline scene="https://prod.spline.design/CMjc6XGvikYEXy62/scene.splinecode" />
                    </div>
                    
                </div>
                    <div className="boite">
                    <div className="nom">
                        <h3>L'expédition aventureuse de l'Océanie</h3>
                        <Link to="/oceanie">Voir</Link>
                    </div>
                    <div className="module">
                    <Spline scene="https://prod.spline.design/vQlg94XSoCWZWcHU/scene.splinecode" />
                    </div>
                    
                </div>
                <div className="boite">
                    <div className="nom">
                        <h3>L'expédition vaste de l'Amérique</h3>
                        <Link to="/amérique">Voir</Link>
                    </div>
                    <div className="module">
                        <Spline scene="https://prod.spline.design/R8EKN0r78wDhLQIS/scene.splinecode" />
                    </div>
                    
                </div>
            </article>
            
            <article className="experience">
                <div className="bulle">
                    <div>
                       <img src={Toucan} alt="" /> 
                    </div>
                   
                    
                   <h2> Laissez votre curiosité guider vos mouvements et découvrez par vous-même chaque région !</h2>
                   <p>
                      Profitez du climat chaud et humide,
                      du sable à perte de vue de l'Afrique ;
                      passez à travers le brouillard dense de l'Antarctique pour
                      y découvrir des mammifères fascinants ;
                      soyez témoin des beaux paysages et du cycle de
                      vie des animaux sauvages de l'Asie ;
                      frôlez l'océan qui s'étend à perte de vue en Océanie ;
                      et enfin, laissez-vous guider par la voix des
                      forêts de l'Amérique lors de votre voyage.
                   </p>
                <img src="" alt="" /> 
                </div>
                
                

            </article>
            
            <article className="separateur">
                
                <div className="module"> 
                <Spline scene="https://prod.spline.design/8Kk1Xdtvt7G-CnfK/scene.splinecode" />
                </div>
            </article>


            <article className="zoos">
                <div>
                   <h3> Les pensées derrière Avesia : </h3>

                </div>
                <div className="categories">
                    <div className="module">
                     <Spline scene="https://prod.spline.design/rZDdx7hcxfUTYJG1/scene.splinecode" /> 
                    </div>
                    
                </div>
                  
            </article>
            <div className="jeu">
             <JeuMemoire1/>
            </div>

            
            
        </main>

        <Footer/>

        <ScrollToTop top={0} smooth />
     </div>
   )
}
export default Home;