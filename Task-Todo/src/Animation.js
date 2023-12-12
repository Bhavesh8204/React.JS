import React, { useState } from 'react';

function Animation() {

    const [position, setPosition] = useState(0);
    const animationSpeed = 2;
    const animationDistance = 500;

    const handleButtonClick = () => {
        let currentPosition = 0;
        const animationInterval = setInterval(() => {
            currentPosition += animationSpeed;
            if (currentPosition >= animationDistance) {
                clearInterval(animationInterval);
            } else {
                setPosition(currentPosition);
            }
        }, 16);
        setTimeout(() => {
            clearInterval(animationInterval);
        }, animationDistance / animationSpeed);
    };


    return (
        <div className="animation-container">
            <div
                className="animated-element"
                style={{ left: position + 'px' }}
            ></div>
            <button onClick={handleButtonClick}>Start Animation</button>
        </div>
    );
}

export default Animation
