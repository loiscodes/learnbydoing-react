import './hero.component.css';

function HeroComponent() {
  return (
    <section className="section-container hero-container">
      <div className="section-hero-landing-page-sign-up-section" id="sign-up-form">
        <form className="section-hero-landing-page-sign-up-form">
          <input type="text" placeholder="Resturant Owner Name"/>
          <input type="text" placeholder="Resturant Name"/>
          <input type="tel" placeholder="Main Contact Phone"/>
          <input type="email" placeholder="Main Contact Email"/>
          <div>
            <select value={"none"}>
              <option value="none" disabled hidden>Resturant Type</option>
          <option value="truck">Truck</option>
          <option value="cart">Cart</option>
          <option value="trailer">Trailer</option>
          <option value="tent">Tent/Caterer</option>
          <option value="virtual">Virtual Kitchen</option>
          </select>
          </div>

          <textarea placeholder="What kind of culinary delights do you offer?" cols="10"></textarea>
          <input type="submit" value="Sign Up Now"/>
        </form>
      </div>
      <div>
        <main className="section-title-header hero-header"
       >The World's Largest Street Food Festival</main
     >
     <h1 id="section-hero-dates">August 7th - 22th</h1>
     <ul className="section-hero-list-of-cities">
       <li>New York</li>
       <li>Los Angeles</li>
       <li>Chicago</li>
       <li>Houston</li>
       <li>Atlanta</li>
       <li>Austin</li>
     </ul>
     </div>
    </section>
  );
}

export default HeroComponent;
