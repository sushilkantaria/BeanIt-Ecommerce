import p1_img from "./L_LA.png";
import p2_img from "./L_ES.png";
import p3_img from "./L_CA.png";
import p4_img from "./L_AM.png";
import p5_img from "./L_MO.png";
import p6_img from "./L_AR.png";
import p7_img from "./L_RO.png";
import p8_img from "./L_EX.png";
import p9_img from "./L_LI.png";
import p10_img from "./M_LA.png";
import p11_img from "./M_ES.png";
import p12_img from "./M_CA.png";
import p13_img from "./M_AM.png";
import p14_img from "./M_MO.png";
import p15_img from "./M_AR.png";
import p16_img from "./M_RO.png";
import p17_img from "./M_EX.png";
import p18_img from "./M_LI.png";
import p19_img from "./D_LA.png";
import p20_img from "./D_ES.png";
import p21_img from "./D_CA.png";
import p22_img from "./D_AM.png";
import p23_img from "./D_MO.png";
import p24_img from "./D_AR.png";
import p25_img from "./D_RO.png";
import p26_img from "./D_EX.png";
import p27_img from "./D_LI.png";


let all_product=[
    {
        id:28,
        name:"Latte light roast",
        category:"Light Roast",
        category_2:'latte',
        image:p1_img,
        description:"A smooth and creamy light roast with subtle hints of sweetness, perfect for a comforting morning pick-me-up.",
        price:599,
        rating:4,
    },
    {
        id:27,
        name:"Espresso light roast",
        category:"Light Roast",
        category_2:'espresso',
        image:p2_img,
        price:499,
        description:'Experience the bold flavors of our light roast espresso, boasting a balanced and aromatic profile.',
        rating:3,
    },
    {
        id:26,
        name:"Cappuccino light roast",
        category:"Light Roast",
        category_2:'cappuccino',
        image:p3_img,
        description:'Indulge in the frothy goodness of our light roast cappuccino, offering a delightful blend of espresso and creamy milk foam.',
        price:599,
        rating:4,
    },
    {
        id:25,
        name:"Americano light roast",
        category:"Light Roast",
        category_2:'americano',
        image:p4_img,
        price:499,
        description:'Enjoy the simplicity of our light roast Americano, featuring rich espresso shots topped with hot water for a smooth and satisfying drink.',
        rating:5,
    },
    {
        id:24,
        name:"Mocha light roast",
        category:"Light Roast",
        category_2:'mocha',
        image:p5_img,
        price:499,
        description:'Treat yourself to the decadent flavors of our light roast mocha, combining espresso with velvety steamed milk and rich chocolate syrup.',
        rating:5,
    },
    {
        id:23,
        name:"Arabica light roast",
        category:"Light Roast",
        category_3:'arabica',
        image:p6_img,
        price:489,
        description:'Delight in the delicate flavors of our light roast Arabica coffee, featuring notes of floral and fruitiness for a refreshing and aromatic experience.',
        rating:4,
    },
    {
        id:22,
        name:"Robusta light roast",
        category:"Light Roast",
        category_3:'robusta',
        image:p7_img,
        price:389,
        description:'Experience the robust character of our light roast Robusta coffee, known for its bold flavor and strong caffeine kick.',
        rating:3,
    },
    {
        id:21,
        name:"Excelsa light roast",
        category:"Light Roast",
        category_3:'excelsa',
        image:p8_img,
        price:389,
        description:'Explore the unique taste of our light roast Excelsa coffee, with its complex flavor profile and hints of tartness and spice',
        rating:3,
    },
    {
        id:20,
        name:"Liberica light roast",
        category:"Light Roast",
        category_3:'liberica',
        image:p9_img,
        price:399,
        description:"Embark on a flavor journey with our light roast Liberica coffee, featuring earthy notes and a distinctive aroma that's sure to captivate your senses.",
        rating:4,
    },
    {
        id:19,
        name:"Latte medium roast",
        category:"Medium Roast",
        category_2:'latte',
        image:p10_img,
        price:589,
        description:"Enjoy the perfect balance of strength and smoothness with our medium roast latte, crafted to satisfy your coffee cravings any time of the day",
        rating:4,
    },
    {
        id:18,
        name:"Espresso medium roast",
        category:"Medium Roast",
        category_2:'espresso',
        image:p11_img,
        price:699,
        description:"Elevate your espresso experience with our medium roast blend, delivering a rich and flavorful shot that's sure to awaken your senses.",
        rating:4,
    },
    {
        id:17,
        name:"Cappuccino medium roast",
        category:"Medium Roast",
        category_2:'cappuccino',
        image:p12_img,
        price:630,
        description:"Indulge in the classic Italian tradition with our medium roast cappuccino, featuring perfectly balanced espresso and creamy milk foam.",
        rating:5,
    },
    {
        id:16,
        name:"Americano medium roast",
        category:"Medium Roast",
        category_2:'americano',
        image:p13_img,
        price:430,
        description:"Savor the smooth and satisfying taste of our medium roast Americano, offering a bold espresso kick with a subtle hint of sweetness.",
        rating:3,
    },
    {
        id:15,
        name:"Mocha medium roast",
        category:"Medium Roast",
        category_2:'mocha',
        image:p14_img,
        price:430,
        description:"Treat yourself to the irresistible blend of espresso, steamed milk, and chocolate in our medium roast mocha, a decadent delight for any coffee lover.",
        rating:3,
    },
    {
        id:14,
        name:"Arabica medium roast",
        category:"Medium Roast",
        category_3:'arabica',
        image:p15_img,
        price:499,
        description:"Experience the rich and nuanced flavors of our medium roast Arabica coffee, sourced from the finest beans for a truly exceptional cup.",
        rating:4,
    },
    {
        id:13,
        name:"Robusta medium roast",
        category:"Medium Roast",
        category_3:'robusta',
        image:p16_img,
        price:499,
        description:"Embrace the boldness of our medium roast Robusta coffee, featuring a strong, full-bodied flavor that's perfect for those who like their coffee with an extra kick.",
        rating:4,
    },
    {
        id:29,
        name:"Excelsa medium roast",
        category:"Medium Roast",
        category_3:'excelsa',
        image:p17_img,
        price:380,
        description:"Discover the exotic flavors of our medium roast Excelsa coffee, with its unique blend of fruity and spicy notes that will tantalize your taste buds.",
        rating:3,
    },
    {
        id:11,
        name:"Liberica medium roast",
        category:"Medium Roast",
        category_3:'liberica',
        image:p18_img,
        price:350,
        description:"Immerse yourself in the complex and aromatic profile of our medium roast Liberica coffee, offering a truly distinctive coffee experience unlike any other",
        rating:3,
    },
    {
        id:10,
        name:"Latte dark roast",
        category:"Dark Roast",
        category_2:'latte',
        image:p19_img,
        price:899,
        description:"Indulge in the velvety smoothness of our dark roast latte, featuring intense espresso flavors balanced perfectly with creamy steamed milk.",
        rating:5,
    },
    {
        id:9,
        name:"Espresso dark roast",
        category:"Dark Roast",
        category_2:'espresso',
        image:p20_img,
        price:750,
        description:"Experience the bold and robust character of our dark roast espresso, delivering a powerful caffeine punch with deep, rich flavors.",
        rating:5,
    },
    {
        id:8,
        name:"Cappuccino dark roast",
        category:"Dark Roast",
        category_2:'cappuccino',
        image:p21_img,
        price:999,
        description:"Dive into the rich and luxurious taste of our dark roast cappuccino, where bold espresso meets velvety milk foam for a truly indulgent coffee experience.",
        rating:5,
    },
    {
        id:7,
        name:"Americano dark roast",
        category:"Dark Roast",
        category_2:'americano',
        image:p22_img,
        price:850,
        description:"Enjoy the intense flavor and smooth finish of our dark roast Americano, crafted to satisfy even the most discerning coffee connoisseurs.",
        rating:4,
    },
    {
        id:6,
        name:"Mocha dark roast",
        category:"Dark Roast",
        category_2:'mocha',
        image:p23_img,
        price:699,
        description:"Indulge your senses with the decadent blend of espresso, dark chocolate, and steamed milk in our dark roast mocha, a true delight for chocolate lovers.",
        rating:3,
    },
    {
        id:5,
        name:"Arabica dark roast",
        category:"Dark Roast",
        category_3:'arabica',
        image:p24_img,
        price:799,
        description:"Discover the deep and complex flavors of our dark roast Arabica coffee, with its bold yet smooth taste that's perfect for any time of day.",
        rating:5,
    },
    {
        id:4,
        name:"Robusta dark roast",
        category:"Dark Roast",
        category_3:'robusta',
        image:p25_img,
        price:750,
        description:"Experience the intense and robust flavors of our dark roast Robusta coffee, offering a bold and invigorating brew that's sure to awaken your senses.",
        rating:3,
    },
    {
        id:3,
        name:"Excelsa dark roast",
        category:"Dark Roast",
        category_3:'excelsa',
        image:p26_img,
        price:999,
        description:"Delight in the exotic taste of our dark roast Excelsa coffee, with its rich and complex flavor profile that's sure to captivate your palate.",
        rating:5,
    },
    {
        id:2,
        name:"Liberica dark roast",
        category:"Dark Roast",
        category_3:'liberica',
        image:p27_img,
        price:999,
        description:"Immerse yourself in the bold and distinctive flavors of our dark roast Liberica coffee, providing a truly unique coffee experience you won't soon forget.",
        rating:4,
    },
];

export default all_product;