import Header from "../components/Header";
import Footer from "../components/Footer";

import "../assets/css/Credits.css";
import ScrollToTop from "react-scroll-to-top";

import { motion } from "framer-motion";

const Credits = () => {
    return (
        <div className="credits-body">
              <header>
                <Header/>
              </header>
              <main>
                <h2>Ce qui a été fait de ma main : </h2>

                <motion.div className="categories" initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} >
                    <div className="item">
                    <span class="material-icons">
                      emoji_objects
                    </span>
                        <p>Délibération du concept et idées concues</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                       draw
                      </span>
                        <p>Illustrations crées</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                    view_in_ar
                       </span>
                        <p>Modélisations 3D</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                       perm_media
                       </span>
                        <p>Intégration des médias</p>
                    </div>
                    <div className="item">
                    <span class="material-icons">
                    integration_instructions
                       </span>
                        <p>Programmation et intéractions</p>
                    </div>
                </motion.div>
                
              </main>
              <Footer/>
              <ScrollToTop/>
        </div>
    )
}
export default Credits;