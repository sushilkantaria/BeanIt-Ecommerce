// Define an array of coffee objects with their descriptions
const coffees = [
    { name: "Light Roast", image: "light-roast.webp", description: "Light roasts boast similar caffeine to darker roasts, but their lower density might require slightly more beans for your desired strength. Brew them with pour-over methods like Chemex or V60 to enjoy their bright acidity and delicate flavors – perfect if you prefer coffee that's less bitter." },
    { name: "Medium Roast", image: "medium-roast.webp", description: "Medium roast offers the happy medium: balanced flavor, medium body, and hints of fruit, chocolate, or caramel. Enjoyed black or with cream and sugar, it's the perfect bridge between light and dark roasts. Versatile and crowd-pleasing, it's a great starting point for coffee adventures." },
    { name: "Dark Roast", image: "dark-roast.webp", description: "Dark roast boasts bold, intense flavors thanks to caramelized sugars during roasting. Expect a smooth taste with notes of dark chocolate, nuts, or smoke - perfect for espresso or strong coffee lovers. New to coffee and find lighter roasts too acidic? Try a dark roast!" },
    
    // Add more coffee objects as needed
];

// Function to generate coffee cards dynamically
function generateCoffeeCards() {
    const coffeeCardsContainer = document.getElementById("coffee-cards-container");

    coffees.forEach(coffee => {
        // Create card element
        const card = document.createElement("div");
        card.classList.add("coffee-card");

        // Create image element
        const img = document.createElement("img");
        img.src = coffee.image;
        img.alt = coffee.name;

        // Create heading element
        const heading = document.createElement("h3");
        heading.textContent = coffee.name;

        // Create paragraph element for description
        const paragraph = document.createElement("p");
        paragraph.textContent = coffee.description;

        // Append elements to card
        card.appendChild(img);
        card.appendChild(heading);
        card.appendChild(paragraph);

        // Append card to container
        coffeeCardsContainer.appendChild(card);
    });
}


// Call the function to generate coffee cards
generateCoffeeCards();

// Get all coffee card elements
const coffeeCards = document.querySelectorAll('.coffee-card');

// Define URLs for each coffee card
const cardUrls = [
    '../Facts/coffee_facts.html',
    'url_2',
    'url_3',
    // Add more URLs as needed
];

// Attach click event listener to each coffee card
coffeeCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        // Open the corresponding URL in a new tab when the card is clicked
        window.open(cardUrls[index], '_blank');
    });
});