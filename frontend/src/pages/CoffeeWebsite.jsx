import React, { useEffect } from 'react';
import espressoImage from './/Home/espresso.jpg'; 
import latteImage from './/Home/latte.jpg'; // Import the image
import cappuccinoImage from './/Home/cappuccino.png'; // Import the image
import './CoffeeWebsite.css';

const coffees = [
    { name: "Espresso", image: espressoImage, description: "A concentrated form of coffee served in small, strong shots." },
    { name: "Latte", image: latteImage, description: "A coffee drink made with espresso and steamed milk." },
    { name: "Cappuccino", image:cappuccinoImage, description: "A coffee drink made with espresso and frothy milk." },
    // Add more coffee objects as needed
];

function CoffeeWebsite() {
    useEffect(() => {
        const coffeeCards = document.querySelectorAll('.coffee-card');

        coffeeCards.forEach((_, index) => {
            const handleClick = () => {
                window.location.reload(); // Reloads the page
            };

            coffeeCards[index].addEventListener('click', handleClick);

            return () => {
                coffeeCards[index].removeEventListener('click', handleClick);
            };
        });
    }, []);

    return (
        <div className="coffee-cards-container" id="coffee-cards-container">
            {coffees.map((coffee, index) => (
                <div className="coffee-card" key={index} style={{background:'black'}}>
                    <img src={coffee.image} alt={coffee.name} />
                    <h3>{coffee.name}</h3>
                    <p>{coffee.description}</p>
                </div>
            ))}
        </div>
    );
}

export default CoffeeWebsite;