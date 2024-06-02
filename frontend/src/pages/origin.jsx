import React from 'react';
import './origin.css'; // Import your CSS file
import Logo from './final-origin/logo.png';
import Asia from './final-origin/asia.jpeg';
import Africa from './final-origin/africa.jpg';
import Indonesia from'./final-origin/indonesia.jpeg';
import CoffeeInfo from'./final-origin/coffeeinfo1.mp4';
import CoffeeCards from './CoffeeCards';

const Origin = () => {
  return (
    <div className='origin'>
      <header>
        <div className="logo-container">
          <img src={Logo} alt="Bean It Logo" />
        </div>
      </header>

      <div className="section text-content" style={{marginBottom:'30px'}}>
        <h2 style={{textAlign:'center'}}>Where does our coffee come from?</h2>
        <p style={{marginRight:'10px', marginLeft:'10px'}}>Bean It embarks on a global quest to unearth the rarest coffee gems, sourcing its beans from the world&aposs most coveted growing regions within the legendary &quotcoffee belt.&quot Nestled in the heart of Africa, Latin America, and Asia, these premier estates boast a perfect harmony of altitude, soil, and climate, cultivating exceptional beans with vibrant flavor and unparalleled aroma. Our meticulous sourcing ensures your cup overflows with freshness, as we partner with sustainable farms that prioritize ethical practices. At Bean It, we believe the journey from bean to cup matters, bringing you coffee that is as good for you as it is for the planet.</p>
      </div>

      <section style={{ marginBottom: '50px' }}>
  <div className="section images-section">
    <div className="image-container left">
      <img src={Africa} alt="Coffee 1" style={{marginLeft:'110px', marginTop:'50px', marginBottom:'50px'}}/>
    </div>
    <div className="text-container right">
      <h2 className="section-heading">Africa</h2>
      <p>African coffees are celebrated worldwide for their unique and exceptional taste, offering a truly distinct coffee experience. With a profile unlike any other, they stand out among the best in the world, renowned for their remarkable flavor.</p>
      <ul>
        <li>Syrupy Body</li>
        <li>Balanced Acidity</li>
        <li>Sustainable Sourcing</li>
      </ul>
    </div>

    <div className="image-container right" style={{marginTop:'50px'}}>
      <img src={Asia} alt="Coffee 2" style={{marginLeft:'190px'}} />
    </div>
    

    <div className="text-container left"> 
      <h2 className="section-heading">Asia</h2>
      <p>Unveiling Asia coffee enigma: Bean It. We source unique beans from legendary regions, where cultivation is an art. Immerse yourself in rich, dark roasts bursting with earthy notes, balanced by gentle acidity. Experience the bold, enigmatic adventure. Experience Bean It.</p>
      <ul>
        <li>Earthy Depths</li>
        <li>Dark Roast Perfection</li>
        <li>Ancient Traditions</li>
      </ul>
    </div>
  </div>

  <div className="section images-section">
    <div className="image-container left">
      <img src={Indonesia} alt="Coffee 3" style={{marginLeft:'110px', marginTop:'50px', marginBottom:'30px'}} />
    </div>
    <div className="text-container right">
      <h2 className="section-heading">Indonesia</h2>
      <p>Indonesian coffee stands out for its bold earthiness, low acidity, and full-bodied richness. Unlike the well-rounded Latin American blends, these beans boast deeper flavors with hints of spice, thanks to darker roasts and unique processing methods.</p>
      <ul>
        <li>Nutty</li>
        <li>Less Acidic</li>
        <li>Chocolatey Sweetness</li>
      </ul>
    </div>
  </div>
</section>



      {/* Add other sections as needed */}

      <section className="section video-section">
  <h2 className="section-heading">Get to Know Your Coffee Beans</h2>
  <div className="video-container left">
    <video autoPlay loop muted>
      <source src={CoffeeInfo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div className="text-container right">
    <p>
      Arabica coffee beans are one of the most popular types and are believed to be one of the first coffee species ever grown, with roots dating back 100 years. Known for their vibrant and complex flavors, these beans are loved by coffee connoisseurs because of their smooth and less acidic taste.
    </p>
    <p>
      There are two types of Arabica coffee beans, Typica and Bourbon. Typica is also sometimes known as Sumatra and Arabigo, and it is this type which is thought to be the first bean ever discovered. Bourbon, on the other hand, is considered to be a natural mutation of Typica and offers a more balanced and slightly sweeter flavor, making it a popular choice amongst coffee lovers.
    </p>
    <p>
      Robusta coffee boasts a distinct character in the coffee world. Native to Africa and now flourishing in Southeast Asia, these beans pack a powerful punch. Their flavor profile leans towards bold and intense, sometimes described as nutty or chocolatey, with a touch of sourness or bitterness. What Robusta truly excels in is caffeine content nearly double that of Arabica beans! This makes them ideal for espresso blends, where they contribute a thick crema, and for instant coffee due to their affordability and robust flavor. Additionally, Robusta&aposs resilience to pests and disease makes them easier to cultivate, allowing them to thrive at lower altitudes compared to Arabica beans. So, if you crave a strong cup with a bold kick, Robusta coffee beans are definitely worth exploring.
    </p>
  </div>
</section>



<section className="cards-section" style={{marginLeft:'30px',marginRight:'30px'}}>
        <h2 style={{textAlign:'center', marginTop:'50px', marginBottom:'30px'}}>Why is coffee roasted?</h2>
        <p style={{marginBottom:'50px'}}>Roasting is the process of heating coffee beans to bring out the rich and aromatic flavor that we know and love. Fresh off the plant, coffee beans are actually green in color and possess a grassy smell, then when they’re roasted, chemical changes occur as a result of the beans being brought to a high temperature very quickly. This change also causes them to turn into a deep brown color with a wonderfully earthy smell. Once they’re roasted, they’re ready to be ground and brewed into your favorite blends.</p>
        <div className="cards-container">
          {/* Coffee cards will be dynamically generated here */}
          <CoffeeCards/>
        </div>
      </section>

    </div>
  );
};

export default Origin;