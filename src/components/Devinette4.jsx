import React, { useState, useEffect } from "react"; 
import "../assets/css/Devinette.css";
const motsSecrets = [ 
    { 
        mot: "PINGOUIN", 
        description: "Un oiseau marin qui habite les régions antarctiques, connu pour son incapabilité de voler."
    }, 
    { 
        mot: "ICEBERG", 
        description: "De grandes masses de glace flottante qui se détachent des glaciers de l'Antarctique."
    }, 
    { 
        mot: "BANQUISE", 
        description: "La glace de mer qui entoure l'Antarctique pendant une grande partie de l'année."
    }, 
    { 
        mot: "GLACE", 
        description: "De l'eau à l'état de solide. La grande majorité de l'Antarctique est recouverte de cette substance."
    }, 
    { 
        mot: "NEIGE", 
        description: "Précipitation principale de cette région, qui peut s'accumuler en couches épaisses."
    }, 
    { 
        mot: "AURORE", 
        description: "Un spectacle lumineux dans le ciel antarctique, dont le nom se termine par boréales."
    } 
]; 
  
const motHasard = () => { 
    const placeRandom = Math.floor(Math.random() * motsSecrets.length); 
    return motsSecrets[placeRandom]; 
}; 
  
const Devinette4 = () => { 
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
  
export default Devinette4; 