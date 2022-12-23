import React from "react";
import "./BusinessCard.css";
import { Selfie } from "../Selfie/Selfie";
import { InfoBox } from "../InfoBox/InfoBox";

const BusinessCard = () => {
    return(
        <div className="container">
            <Selfie/>
            <InfoBox/>
        </div>
    );
}

export {BusinessCard}