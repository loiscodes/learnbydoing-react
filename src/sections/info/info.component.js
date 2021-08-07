import './info.component.css';

function InfoComponent() {
    return (
<section className="section-container info-container">
      <div className="section-title-header">10.2 M dollars generated</div>
      <div className="section-info-item-container">
        <span className="section-info-item">
          <i className="fa fa-map fa-5x" aria-hidden="true"></i>
          <p className="section-info-paragraph">
            Discover Street has regional community workshops before the festival
            to help New and Veteran Street Vendors to help with marketing and
            social media. We therive to give our members the best experience
            especially during one of the biggest events of the year
          </p>
        </span>
        <span className="section-info-item">
          <i className="fa fa-bullhorn fa-5x"></i>
          <p className="section-info-paragraph">
            Our experienced team has crafted award winning Marketing templates
            and a Marketing strategy to give you the best the largest Street
            Food Festival has to offer.
          </p>
        </span>
        <span className="section-info-item">
          <i className="fa fa-5x fa-list"></i>
          <p className="section-info-paragraph">
            With over 100 thousand followers, Discover Street has an extensive
            mailing list that Members have complete access to. Market to fans
            interested in your culinary type and mission
          </p>
        </span>
      </div>
    </section>
    );
}

export default InfoComponent;