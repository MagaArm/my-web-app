import { useEffect } from "react";
import { useState } from "react";
import dressWhitesImage from '../images/Unit_Pic.jpg';
import cpoMessImage from '../images/MSRON_8_cpos.jpg';
import rooseveltImage from '../images/TR_Pic.png';
import '../css/images.css';
import '../css/flexContainer.css';


function MyNavyCareer() {

    // dont know if ill need this
    const [imageData, setImageData] = useState({});

    useEffect(() => {
        // const imageUrl = 
        // console.log(element);
        // console.log(element.id);
    }, []);

    return (
        <div className="card-container">
            <h1>My Navy Career</h1>
            <div className="card">
                <h3>Where It started</h3>
                <p>I joined the Navy because it is the only branch of the military that offered me a job</p>
            </div>
            <div className="card">
                <h3>First Command</h3>
                <img className="image-preview" src={rooseveltImage}></img>
            </div>
            <div className="card">
                <h3>CS 602</h3>
                <p>Server-Side Web Dev</p></div>
            <div className="card">
                <h3>CPO Club</h3>
                <img className="image-preview" src={cpoMessImage}></img>
                <i>These are some salty motherfuckers</i>
            </div>
            <div className="card">
                <h3>Latest</h3>
                <img className="image-preview" src={dressWhitesImage}></img>
            </div>
        </div>
    );
}

export default MyNavyCareer;