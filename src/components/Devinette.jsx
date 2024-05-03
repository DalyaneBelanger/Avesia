import React, { useState, useEffect } from "react"; 
import "../assets/css/Devinette.css";
const motsSecrets = [ 
    { 
        mot: "LION", 
        description: "cet animal est surnommé le roi de la jungle."
    }, 
    { 
        mot: "SAVANE", 
        description: "Un endroit symbolique de l'afrique, une forêt remplie de lianes et de l'herbe haute."
    }, 
    { 
        mot: "SAHARA", 
        description: "Cet endroit est le plus chaud du monde entier, avec du sable à perte de vue."
    }, 
    { 
        mot: "PYRAMIDE", 
        description: "Un monument historique construit par le peuple égyptien."
    }, 
    { 
        mot: "OASIS", 
        description: "Cet endroit est une région fertile dans le désert, souvent entouré de végétation et d'eau."
    }, 
    { 
        mot: "DJEMBE", 
        description: "C'est un objet africain, qui est un instrument à percussion."
    } 
]; 
  
const motHasard = () => { 
    const placeRandom = Math.floor(Math.random() * motsSecrets.length); 
    return motsSecrets[placeRandom]; 
}; 
  
const Devinette = () => { 
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
            window.alert("Game Over! You made too many wrong guesses."); 
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
            setMessage("Congo Geek! You have guessed the word correctly!"); 
        } else { 
            setMessage("You made a Wrong Guess Geek!. Try again!"); 
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
  
export default Devinette; 