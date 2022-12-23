import React from "react";
import "./InfoBox.css";

const InfoBox = () => {
    return (
        <div className="infoBox">
            <p className="name">Jordan Gopie</p>
            <p className="title">Frontend Developer</p>
            <p className="website">website.com</p>
            <button className="emailButton">Email</button>
            <button className="linkedInButton">LinkedIn</button>
            <p className="about">About</p>
            <p className="aboutText">
                I'm a self-taught developer. 
                I've been working part time as a junior developer for RedAnts Caribbean Ventures for the 
                past three years, mostly on the backend.
            </p>
            <p className="interests">Interests</p>
            <p className="interestText">
                Food enthusiast. Gamer. 
                Procrastinator. Maker of bad decisions.
            </p>
        </div>
    );
}

export { InfoBox }