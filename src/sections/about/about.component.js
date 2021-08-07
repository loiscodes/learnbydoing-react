import './about.component.css';
import whatwedo from '../../assets/whatwedo.jpeg';

function AboutComponent(){
    return(
        <section className="section-container history-container">
      <img
        src={whatwedo}
        alt="Man and woman at a food truck"
      />
      <div className="section-content">
        <div className="section-title-header">We Love What We Do</div>
        <p>
          Discover Street has been around for over 5 years with a mission to
          support, showcase, and uplift Street food vendors of all times. With
          that mission in mind, we created the worlds largest street food festival
        </p>
        <p>
          Held every year, we showcase diversity and creativity in culinary
          creations, spanning from high-end to avent-garde concepts. We have all
          walks of life travel to and from each city for a chance to explore and
          <em>discover</em> something new or just simply hopping on an adventure.
        </p>
        <p>
          For 3 weeks, Residents, Travelers, and Foodies have a chance to try new
          local foods, play family-friendly games, and take mini-cooking classes,
          which gives Street Vendors an opportunity to flex their culinary muscles
          and get new patrons
        </p>
        <p>
          We provide all the marketing, social media support and guidence, and
          education needed to ensure the best experience for the Vendor and
          customers whether you are new to the game or a Veteran!
        </p>
        <p className="emphasis">Get DISCOVERED.</p>
        <p><a href="#sign-up-today-link">Sign up today</a></p>
        
      </div>
      
    </section>
    )
}

export default AboutComponent;