import React from 'react';
import { Section } from 'react-scroll-section';

const About = () => {
  return (
    <Section id="about">
      <div className="md-container sm_section-spacing">
        <div className="about-child">
          <h2 className="about-title">
            Platformpro is for <br /> streamers and content creators
          </h2>
          <div className="about-content-parent">
            <div className="about-content-child1">
              <h4 className="about-headers">
                Let’s face it. Just streaming isn’t enough these days.
              </h4>
              <p>
                The greatest content creators in the world have had their
                personal brand for years. They’re well known and stand out from
                the crowd. If you’re new to the scene, you’re going to need more
                than just good content to escape the noise.
              </p>
              <p>
                At Platformpro we know your content deserves a proper home- a
                beautiful website to show sponsors, a place to own your content,
                and tools to grow your personal brand without being tied to one
                service. Our completely free website builder let’s you get the
                head start you need.
              </p>
              <p className="about-content-child1_p-last">
                Content creators from all over the world are using Platformpro
                to stand out, it’s time to join them.
              </p>
            </div>
            <div className="about-content-child2">
              <div>
                <h4 className="about-headers">Can’t code? No problem.</h4>
                <p>
                  Platformpro’s Drag & Drop system makes building a professional
                  website easy. Pick a theme and then customize it for your
                  unique brand, all in less than 5 minutes.
                </p>
              </div>
              <div>
                <h4 className="about-headers">
                  All your content in one place.
                </h4>
                <p>
                  Integrate and display social media feeds, pictures and videos
                  together and unite your audience on your Platformpro website.
                </p>
              </div>
              <button className="btn-bg">get started</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
