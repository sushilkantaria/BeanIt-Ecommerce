import React from 'react';
import './facts.css'; // Import CSS file for facts
import './footer.css'; // Import Footer CSS file
import arrow from '../images/up-arrow.jpg' 
import fact1 from './img-facts/fact 1.webp';
import fact2 from './img-facts/fact 2.jpg';
import fact10 from './img-facts/fact 10.jpg';
import fact11 from'./img-facts/fact 11.webp';
import fact12 from './img-facts/fact 12.webp';
import fact13 from  './img-facts/fact 13.webp';
import fact14 from './img-facts/fact 14.jpg';
import fact15 from './img-facts/fact 15.jpg';
import fact16 from './img-facts/fact 16.jpg';
import fact17 from './img-facts/fact 17.jpg';
import fact3 from './img-facts/fact 3.webp';
import fact4 from './img-facts/fact 4.jpg';
import fact5 from './img-facts/fact 5.jpg';
import fact6 from './img-facts/fact 6.webp';
import fact7 from './img-facts/fact 7.jpg';
import fact8 from './img-facts/fact 8.webp';
import fact9 from './img-facts/fact 9.webp';


function FactsAboutCoffee() {
  return (

    <div className='facts-body'>
    <hr/>
    <br /><br />
      {/* Fact 1 */}
      <div className="section images-section" style={{paddingBottom:'20px'}}>
        <div className="image-container left">
          <img src={fact1} alt="Coffee 1" style={{marginBottom:'50px', borderRadius:"10px"}} />
        </div>
        <div className="text-container right">
          <h2 className="section-heading">Poopacchino?</h2>
          <p>Kopi Luwak, the world&apos;s most expensive coffee, comes from beans that have been eaten and excreted by Asian palm civets. The civet&apos;s digestive system alters the flavor profile, creating a smooth and sought-after cup, but the ethics and hygiene of this method are debated.</p>
        </div>
      </div>

      {/* Fact 2 */}
      <div className="section images-section">
        <div className="image-container right">
          <img src={fact2} alt="Coffee 2" style={{marginLeft:'60px', marginBottom:'20px'}} />
        </div>
        <div className="text-container left">
          <h2 className="section-heading" style={{marginRight:'40px'}}>Fungus Among Us !</h2>
          <p>Coffee cherries can be infected with a specific fungus, creating a rare and prized coffee bean called &quot;Peaberry.&quot; Peaberry coffee beans are rare (3-5% of harvest) because only one bean develops per cherry. This bean is denser and boasts a more intense, complex flavor compared to regular beans.</p>
        </div>
      </div>

      {/* Fact 3 */}
      <div className="section images-section">
        <div className="image-container left">
          <img src={fact3} alt="Coffee 1" style={{marginTop:'40px'}} />
        </div>
        <div className="text-container right">
          <h2 className="section-heading" style={{marginTop:'70px'}}>Musical Inspiration</h2>
          <p>Many famous composers, like Bach and Beethoven, were known to be avid coffee drinkers. Perhaps coffee fueled their creativity? Beethoven himself was said to have meticulously counted out 60 coffee beans for each cup he brewed, a testament to his dedication to his coffee ritual.</p>
        </div>
      </div>

      {/* Fact 4 */}
      <div className="section images-section">
        <div className="image-container right">
          <img src={fact4} alt="Coffee 2" style={{marginTop:'50px', marginLeft:'90px'}}/>
        </div>
        <div className="text-container left">
          <h2 className="section-heading" style={{marginTop:'80px'}}>Coffee Can Forecast the Weather</h2>
          <p>Forget the weatherman! In some cultures, folklore says your espresso&rsquo;s crema holds the key. Thick, luxurious crema supposedly predicts sunshine, while a thin, wispy layer might mean rain is on the way.</p>
        </div>
      </div>

      {/* Fact 5 */}
      <div className="section images-section">
        <div className="image-container left">
          <img src={fact5} alt="Coffee 1" style={{marginTop:'50px'}} />
        </div>
        <div className="text-container right">
          <h2 className="section-heading" style={{marginTop:'80px'}}>From Wine to Waker: The Etymology of Coffee</h2>
          <p>The earliest term for the drink of coffee was the Arabic word “qahwah”, which actually referred to a type of wine. The Ottoman Turks then used the term “kahve”, which was followed by the Dutch word “koffie”, from which the English name was derived in 1582.</p>
        </div>
      </div>

      {/* Fact 6 */}
      <div className="section images-section">
        <div className="image-container right">
          <img src={fact6} alt="Coffee 2" style={{marginTop:'60px', marginLeft:'90px'}} />
        </div>
        <div className="text-container left">
          <h2 className="section-heading">People have tried to ban coffee</h2>
          <p>In its early years, there were plenty of different groups across the world that tried to ban our favourite beverage. Typically, it was because of coffee’s stimulating effect or the particular crowd it attracted. Coffee Houses fast became a spot for free thinkers to discuss their ideas. One particular instance was in Mecca all the way back in 1511 where the governor feared coffee might unite his opposition.</p>
        </div>
      </div>

      {/* Fact 7 */}
      <div className="section images-section">
        <div className="image-container left">
          <img src={fact7} alt="Coffee 1" />
        </div>
        <div className="text-container right">
        <h2 className="section-heading">Coffee&apos;s Cup of Health: A Powerhouse of Antioxidants</h2>
          <p>Thanks to it being jam-packed with antioxidants, coffee remains one of the healthiest beverages in the world. Of course, if you choose to add cream, sugar or syrup then this health factor may be impacted, but otherwise, when consumed as part of a healthy balanced diet and lifestyle, coffee can help people to live longer, happier lives.</p>
        </div>
      </div>

      {/* Fact 8 */}
      <div className="section images-section">
        <div className="image-container right">
          <img src={fact8} alt="Coffee 2" />
        </div>
        <div className="text-container left">
          <h2 className="section-heading">Coffee was not always for drinking</h2>
          <p>Fascinating yes. Coffee journey from food to beverage is pretty wild. Who knew those delicious beans were once enjoyed as an energy bar. Back in the day, East African tribes would grind them up and mix them with animal fat for a surprising, pick-me-up snack.</p>
        </div>
      </div>

      {/* Fact 9 */}
      <div className="section images-section">
        <div className="image-container left">
          <img src={fact9} alt="Coffee 1" />
        </div>
        <div className="text-container right">
          <h2 className="section-heading">The largest cup of coffee in the world was over 26,000 litres</h2>
          <p>Yes, you heard right! The largest cup of coffee ever made was 26,939.22 litres. The brew made in Mexico, on 10 December 2022, took 300 kg of coffee and currently holds the Guinness World Record. </p>
        </div>
      </div>

      {/* Fact 10 */}
      <div className="section images-section">
        <div className="image-container right">
        <img src={fact10} alt="Coffee 2" />
        </div>
        <div className="text-container left">
          <h2 className="section-heading">Britain loves coffee</h2>
          <p>Step aside stereotypes! While the British are renowned for their love of tea, coffee holds a surprising place in their hearts (and mugs). The UK consumes a staggering 95 million cups of coffee daily, proving their appreciation extends beyond the world of tea.</p>
        </div>
      </div>

      {/* Fact 11 */}
      <div className="section images-section">
        <div className="image-container left">
          <img src={fact11} alt="Coffee 1" />
        </div>
        <div className="text-container right">
          <h2 className="section-heading">Coffee helped Brazil go to the Olympics</h2>
          <p>In 1932, the Brazilian government didn’t have enough money to send their athletes to the Olympics, so they funded the trip by selling coffee. They loaded up a ship of coffee beans, hoping to sell it to California on their way.</p>
        </div>
      </div>

      {/* Fact 12 */}
      <div className="section images-section">
        <div className="image-container right">
          <img src={fact12} alt="Coffee 2" />
        </div>
        <div className="text-container left">
          <h2 className="section-heading">Finland consumes the most coffee in the world</h2>
          <p>Where Brazil may grow the most, Finland drinks the most coffee! On average they drink 12kg per person, per year which works out to an impressive 1,680 cups on average each a year.</p>
        </div>
      </div>

      {/* Fact 13 */}
      <div className="section images-section">
        <div className="image-container left">
          <img src={fact13} alt="Coffee 1" />
        </div>
        <div className="text-container right">
          <h2 className="section-heading">Only two U.S. states produce coffee.</h2>
          <p>Kona coffee is the United States&apos; gift to the coffee world. Because coffee traditionally grows best in climates along the equator, Hawaii&apos;s weather is optimal for harvesting beans. California also recently got into the coffee game with dozens of farms now churning out pricey premium bags.</p>
        </div>
      </div>

      {/* Fact 14 */}
      <div className="section images-section">
        <div className="image-container right">
          <img src={fact14} alt="Coffee 2" />
        </div>
        <div className="text-container left">
          <h2 className="section-heading">Espresso means pressed out in Italian.</h2>
          <p>This refers to the way espresso is made — forcing boiling water through pressed coffee grounds. And although espresso has more caffeine per volume than coffee, it would take three shots to equal the amount in a regular cup of joe.</p>
        </div>
      </div>

      {/* Fact 15 */}
      <div className="section images-section">
        <div className="image-container left">
          <img src={fact15} alt="Coffee 1" />
        </div>
        <div className="text-container right">
          <h2 className="section-heading">You can overdose on coffee.</h2>
          <p>Caffeine jitters might be a concern, but a lethal dose of coffee is thankfully very unlikely. For a healthy adult, it would take a whopping 30 cups consumed in a very short time frame to even approach a dangerous level. So, enjoy your cup of joe – moderation is key, but reaching a toxic level is highly improbable.</p>
        </div>
      </div>

      {/* Fact 16 */}
      <div className="section images-section">
        <div className="image-container right">
          <img src={fact16} alt="Coffee 2" />
        </div>
        <div className="text-container left">
          <h2 className="section-heading">One cup of black coffee only has one calorie.</h2>
          <p>Adding sweeteners, cream, and other mix-ins can quickly jack up the total. A venti Java Chip Frappuccino from Starbucks contains 88 grams of sugar and 600 calories — more than a McDonald&apos;s Big Mac!</p>
        </div>
      </div>

      {/* Fact 17 */}
      <div className="section images-section">
        <div className="image-container left">
          <img src={fact17} alt="Coffee 1" />
        </div>
        <div className="text-container right">
        <h2 className="section-heading">You can order coffee 25,000 different ways at Dunkin&apos;.</h2>
          <p>The recently renamed doughnut chain did the math on its customizable java drinks. It sells 2 billion cups globally per year, enough for customers to pick each option 80,000 times.</p>
        </div>
      </div>

      <div className="forbuttons">
                {/* <button className="button back" onClick={() => window.location.href = 'home.html'}>Back</button> */}
                <button className="button home" onClick={() => window.location.href = '/'}>Home</button>
            </div>

            <div className="scroll-to-top">
                <button id="scrollButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={arrow} alt="" />
                    {/* <i className="fas fa-chevron-up"></i> */}
                </button>
            </div>


      {/* Footer */}
      <footer>
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
}

export default FactsAboutCoffee;