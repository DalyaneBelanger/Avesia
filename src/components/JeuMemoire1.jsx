import { useEffect, useState } from "react"
import Arriere from "../assets/img/jpg/Afrique/back.jpg";
import "../assets/css/JeuMemoire.css";
import CarteSeule from "./CarteSeule";

const imagesCartes = [
    {"src": "img/jpg/Afrique/boussole.png", correspond: false },
    {"src": "img/jpg/Afrique/terre.png", correspond: false },
    {"src": "img/jpg/Afrique/arbre.png", correspond: false },
    {"src": "img/jpg/Afrique/viande.png", correspond: false },
    {"src": "img/jpg/Afrique/jumelles.png", correspond: false },
    {"src": "img/jpg/Afrique/patte.png", correspond: false }
]


const JeuMemoire1 = () => {

    const [cartes, setCartes] = useState([]);
    const [tours, setTours] = useState(0);

    const [choixUn, setChoixUn] = useState(null)
    const [choixDeux, setChoixDeux] = useState(null)

    const [disabled, setDisabled] = useState(false);

    const melangerCartes = () => {
         const cartesMelangees = [...imagesCartes, ...imagesCartes]
        .sort(() => Math.random() - 0.5)
        .map((carte) => ({ ...carte, id: Math.random()}))

        setChoixUn(null);
        setChoixDeux(null);
        setCartes(cartesMelangees);
        setTours(0);
    }

    const faireChoix = (carte) => {
        choixUn ? setChoixDeux(carte) : setChoixUn(carte)
    }

    useEffect (() => {
          if (choixUn && choixDeux) {
            setDisabled(true)
            if (choixUn.src === choixDeux.src) {
                setCartes(prevCartes => {
                    return prevCartes.map(carte => {
                        if (carte.src === choixUn.src) {
                            return {...carte, correspond: true}
                        } else {
                            return carte;
                        }
                    })
                })
                recommenceTour();
            } else {
                setTimeout(() => recommenceTour(), 1000)
            }
          }
    }, [choixUn, choixDeux])

    const recommenceTour = () => {
        setChoixUn(null)
        setChoixDeux(null)
        setTours(prevTours => prevTours + 1)
        setDisabled(false)
    }

    useEffect(() => {
        melangerCartes()
    }, [])

    return (
        <div className="jeu-memoire">
            <h1>Trouvez les fameux items du globe et mettez-les en paire !</h1>
            <button onClick={melangerCartes}>Nouveau jeu</button>

            <div className="tableau">
                <div className="carte-grid">
                    {cartes.map(carte => (
                        <CarteSeule 
                        key={carte.id}
                        carte={carte} 
                        faireChoix = {faireChoix}
                        tournee= {carte === choixUn || carte === choixDeux || carte.correspond}
                        disabled={disabled}
                        />
                    ))}
                </div>
            </div>
            <p>Tours : {tours}</p>
        </div>
    )

}

export default JeuMemoire1;