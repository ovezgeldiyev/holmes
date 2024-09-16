import React from "react";

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="auto__container">
        <div className="highlights__inner">
          <div className="highlights__inner-title">
            <h3>Neighborhood Highlights</h3>
          </div>
          <div className="highlights__inner-map">
            <img src="/images/map.png" alt="" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467690.14387700753!2d-46.92495683400637!3d-23.682063554288938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo%2C%20Brazil!5e0!3m2!1sen!2s!4v1719233135642!5m2!1sen!2s"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="highlightsInfo">
            <div className="highlightsInfo__title">
              <h6>Average Home Prices Over Time</h6>
              <h3>$500,000</h3>
              <p>Last 5 Years</p>
            </div>
            <div className="highlightsInfo__row">
              <div className="highlightsItem">
                <div className="highlightsItem__chart">
                  <img src="/images/charts/2017.svg" alt="" />
                </div>
                <p>2017</p>
              </div>
              <div className="highlightsItem">
                <div className="highlightsItem__chart">
                  <img src="/images/charts/2018.svg" alt="" />
                </div>
                <p>2018</p>
              </div>
              <div className="highlightsItem">
                <div className="highlightsItem__chart">
                  <img src="/images/charts/2019.svg" alt="" />
                </div>
                <p>2019</p>
              </div>
              <div className="highlightsItem">
                <div className="highlightsItem__chart">
                  <img src="/images/charts/2020.svg" alt="" />
                </div>
                <p>2020</p>
              </div>
              <div className="highlightsItem">
                <div className="highlightsItem__chart">
                  <img src="/images/charts/2021.svg" alt="" />
                </div>
                <p>2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
