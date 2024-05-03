import React, { useState, useEffect } from "react"; 
import "../assets/css/Devinette.css";
const motsSecrets = [ 
    { 
        mot: "HIMALAYA", 
        description: "cet endroit est la plus haute chaîne de montagne au monde."
    }, 
    { 
        mot: "PANDA", 
        description: "C'est l'animal typique de l'Asie, connu de son pelage noir et blanc."
    }, 
    { 
        mot: "SUSHI", 
        description: "Un plat japonais populaire composé de riz vinaigré et de poisson cru."
    }, 
    { 
        mot: "BOLLYWOOD", 
        description: "L'industrie cinématographique indienne."
    }, 
    { 
        mot: "KIMONO", 
        description: "Un vêtement traditionnel japonais, que l'on peut apercevoir surtout lors des festivités."
    }, 
    { 
        mot: "BANGKOK", 
        description: "La capitale de la Thaïlande, célèbre pour ses temples et sa cuisine."
    } 
]; 
  
const motHasard = () => { 
    const placeRandom = Math.floor(Math.random() * motsSecrets.length); 
    return motsSecrets[placeRandom]; 
}; 
  
const Devinette2 = () => { 
    const [motData, setMotData] = useState(motHasard()); 
    const [message, setMessage] = useState(""); 
    const [lettresChoisies, setLettresChoisies] = useState([]); 
    const [indices, setIndices] = useState(3); 
    const [motAfficher, setMotAfficher] = useState(false); 
    const [fin, setFin] = useState(false); 
    const [mauvaisChoix, setMauvaisChoix] = useState(0); 
  
    useEffect(() => { 
        if (mauvaisChoix >= 3) { 
            // Code to show the popup or message for game over 
            window.alert("Fin de la partie ! Vous avez gaspillé trop d'essais."); 
            recommencer(); 
        } 
    }, [mauvaisChoix]); 
  
    const selectionLettre = (lettre) => { 
        if (!lettresChoisies.includes(lettre)) { 
            setLettresChoisies([...lettresChoisies, lettre]); 
            if (!motData.mot.includes(lettre)) { 
                setMauvaisChoix(mauvaisChoix + 1); 
            } 
        } 
    }; 
  
    const Indices = () => { 
        if (indices > 0) { 
            const hiddenlettreIndex = motData.mot 
                .split("") 
                .findIndex((lettre) => !lettresChoisies.includes(lettre)); 
            setLettresChoisies([...lettresChoisies, motData.mot[hiddenlettreIndex]]); 
            setIndices(indices - 1); 
        } 
    }; 
  
    const supprimerLettre = () => { 
        setLettresChoisies(lettresChoisies.slice(0, -1)); 
    }; 
  
    const afficherLettres = () => { 
        const lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  
        return Array.from(lettres).map((lettre, index) => ( 
            <button 
                key={index} 
                onClick={() => selectionLettre(lettre)} 
                disabled={lettresChoisies.includes(lettre)} 
                className={`lettre-button ${ 
                    lettresChoisies.includes(lettre) ? "selected" : ""
                }`} 
            > 
                {lettre} 
            </button> 
        )); 
    }; 
  
    const verifierMot = () => { 
        return motData.mot.split("").every((lettre) => lettresChoisies.includes(lettre)); 
    }; 
  
    const devinerMot = () => { 
        if (verifierMot()) { 
            setMessage("Bravo ! Vous avez deviné le mot !"); 
        } else { 
            setMessage("Dommage, ce n'était pas le bon mot."); 
            setMotAfficher(true); 
        } 
    }; 
  
    const recommencer = () => { 
        setMotData(motHasard()); 
        setMessage(""); 
        setLettresChoisies([]); 
        setIndices(3); 
        setMotAfficher(false); 
        setFin(false); 
        setMauvaisChoix(0); 
    }; 
  
    return ( 
        <div className="container"> 
            <h1>Montrez vos connaissances en trouvant les mots secrets à l'aide d'une devinette !</h1> 
            <div className="mot-container"> 
                {Array.from(motData.mot).map((lettre, index) => ( 
                    <div 
                        key={index} 
                        className={`lettre ${ 
                            lettresChoisies.includes(lettre) ? "visible" : ""
                        }`} 
                    > 
                        {lettresChoisies.includes(lettre) ? lettre : ""} 
                    </div> 
                ))} 
            </div> 
            <p className="mot-description">Hint: {motData.description}</p> 
            {message && ( 
                <div className="message"> 
                    <p>{message}</p> 
                    {motAfficher && <p> Le bon mot était {motData.mot}</p>} 
                </div> 
            )} 
            <div className="button-section"> 
                <div className="devinette-section"> 
                    <button 
                        onClick={recommencer} 
                        className="recommencer-button"
                    > 
                        Recommencer 
                    </button> 
                    <button 
                        onClick={supprimerLettre} 
                        disabled={!lettresChoisies.length} 
                        className="supprimer-button"
                    > 
                        Supprimer une lettre
                    </button> 
                </div> 
                <div className="lettre-selection"> 
                    {afficherLettres()} 
                </div> 
                <div className="indices"> 
                    Indices restants {indices}{" "} 
                    <button 
                        onClick={Indices} 
                        disabled={indices === 0} 
                        className="indice-button"
                    > 
                        Indice
                    </button> 
                </div> 
                {!message && ( 
                    <button 
                        onClick={devinerMot} 
                        disabled={!lettresChoisies.length} 
                        className="deviner-button"
                    > 
                        Deviner 
                    </button> 
                )} 
            </div> 
        </div> 
    ); 
}; 
  
export default Devinette2; 