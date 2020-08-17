import React from 'react';
import { Section } from 'react-scroll-section';

import builder1 from '../../images/builder.jpg';

const Builder = () => {
  return (
    <Section id="builder">
      <div className="builder sm_section-spacing">
        <div className="md-container">
          <h2 className="builder-title sm_section-spacing">
            Build your website
          </h2>
          <div className="builder1-parent">
            <div className="builder1-child_container sticky">
              <div className="builder1-child_container1">
                <h3 id="builder1-h3_first" className="builder1-h3">
                  <span>
                    Powerful Tools, <br /> All in One Place
                  </span>
                </h3>
                <p>
                  Customize and optimize your site with powerful tools that put
                  you in the driver’s seat of your web design. Quickly swap
                  between themes and designs in our easy-to-use drag and drop
                  system to build a site that will impress any sponsor that
                  visits.
                </p>
              </div>
              <div>
                <h3 className="builder1-h3">Own your brand</h3>
                <p>
                  Platformpro stores and archives your important content, like
                  emotes, animations and banners for easy access without relying
                  on services like twitch. Use your pre-made custom content on
                  your site easily for a seamless experience.
                </p>
              </div>
              {/* <button className="btn-bg builder-last_p">
              build your website
            </button> */}
              {/* <h3 className="builder1-h3">Lorem ipsum.</h3>
            <p>
              Velit excepteur duis dolore veniam consequat commodo sint amet. Do
              esse id magna occaecat commodo. Incididunt excepteur velit.
            </p> */}
            </div>
            <div className="builder-img_container">
              <div className="builder-spacing">
                <img className="builder1" src={builder1} alt="builder one" />
              </div>
              <div className="builder-spacing">
                <img className="builder2" src={builder1} alt="builder one" />
              </div>
              <div>
                <img className="builder3" src={builder1} alt="builder one" />
              </div>
              {/* <div className="builder-spacing">
              <img className="builder1" src={builder1} alt="builder one" />
            </div> */}
            </div>
          </div>
          <div className="builder-cta_parent">
            <h2 className="builder-cta">Build your website right now</h2>
            <button className="btn-bg">build now</button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Builder;
