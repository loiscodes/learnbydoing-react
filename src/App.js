import './App.css';
import HeroComponent from './sections/hero/hero.component';
import InfoComponent from './sections/info/info.component';
import AboutComponent from './sections/about/about.component';
import SponsorsComponent from './sections/sponsors/sponsors.component';
import CallToActionComponent from './sections/call-to-action/call-to-action.component';
import FooterComponent from './sections/footer/footer.component';


function App() {
  return (
    <div className="App">
      <HeroComponent />
      <InfoComponent />
      <AboutComponent />
      <SponsorsComponent />
      <CallToActionComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
