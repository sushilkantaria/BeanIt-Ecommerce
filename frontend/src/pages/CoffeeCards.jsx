import React, { useEffect } from 'react';
import './CoffeeCards.css'
import Light from'./final-origin/light-roast.jpg';
import Medium from './final-origin/medium-roast.webp';
import Dark from './final-origin/dark-roast.webp';

// Define an array of coffee objects with their descriptions
const coffees = [
  { name: "Light Roast", image: Light, description: "Light roasts boast similar caffeine to darker roasts, but their lower density might require slightly more beans for your desired strength. Brew them with pour-over methods like Chemex or V60 to enjoy their bright acidity and delicate flavors – perfect if you prefer coffee that's less bitter." },
  { name: "Medium Roast", image: Medium, description: "Medium roast offers the happy medium: balanced flavor, medium body, and hints of fruit, chocolate, or caramel. Enjoyed black or with cream and sugar, it's the perfect bridge between light and dark roasts. Versatile and crowd-pleasing, it's a great starting point for coffee adventures." },
  { name: "Dark Roast", image: Dark, description: "Dark roast boasts bold, intense flavors thanks to caramelized sugars during roasting. Expect a smooth taste with notes of dark chocolate, nuts, or smoke - perfect for espresso or strong coffee lovers. New to coffee and find lighter roasts too acidic? Try a dark roast!" }
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
                <div className="coffee-card" key={index}  style={{marginBottom:'50px'}}>
                    <img src={coffee.image} alt={coffee.name} style={{border:'2xp solid #fff', borderRadius:'12px'}} />
                    <h3 style={{textAlign:'center',marginTop:'5px'}}>{coffee.name}</h3>
                    <p style={{ padding: '20px', textAlign:'center' }}>{coffee.description}</p>
                </div>
            ))}
        </div>
    );
}

export default CoffeeWebsite;