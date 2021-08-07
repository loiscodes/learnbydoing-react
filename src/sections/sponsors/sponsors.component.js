import './sponsors.component.css';

import NFA from '../../assets/partnerships/NFA.png';
import HBM from '../../assets/partnerships/HBM.png';
import REG from '../../assets/partnerships/REG.png';
import CityPark from '../../assets/partnerships/CityPark.png';
import VirtualBar from '../../assets/partnerships/VirtualBar.png';


function SponsorsComponent(){
return(
    <section className="section-container sponsors-container">
    <div className="section-title-header">In partnership with:</div>
    <ul className="section-sponsors-list">
      <li><img src={NFA} alt="partnership logo with NFA" className="sponsor-logo"/><span className="sponsor-name">National Festival Association</span></li>
      <li><img src={HBM} alt="partnership logo with HBM" className="sponsor-logo"/><span className="sponsor-name">City Park</span></li>
      <li><img src={REG} alt="partnership logo with REG" className="sponsor-logo"/><span className="sponsor-name">HBM Bank</span></li>
      <li><img src={CityPark} alt="partnership logo with City Park" className="sponsor-logo"/><span className="sponsor-name">Restrurant Equipment Group</span></li>
      <li><img src={VirtualBar} alt="partnership logo with Virtual Bar" className="sponsor-logo"/><span className="sponsor-name">The Virtual Bar</span></li>
    </ul>
  </section>   
)
}

export default SponsorsComponent;