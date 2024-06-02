// Define an array of coffee objects with their descriptions
const coffees = [
    { name: "Espresso", image: "espresso.jpg", description: "A concentrated form of coffee served in small, strong shots." },
    { name: "Latte", image: "latte.jpg", description: "A coffee drink made with espresso and steamed milk." },
    { name: "Cappuccino", image: "cappuccino.png", description: "A coffee drink made with espresso and frothy milk." },
    
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


