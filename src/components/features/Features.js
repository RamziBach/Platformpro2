import React, { useState, useContext } from 'react';

import AnimatedCard from '../AnimatedCard';
import { Section } from 'react-scroll-section';

import { themeContext } from '../context/ThemeContextProvider';

import browser from '../../images/browser.svg';
import seo from '../../images/seo.svg';
import rocket from '../../images/rocket.svg';
import writer from '../../images/writer.svg';

const orange = '#fbe0ca';
const red = '#fbcaca';
const blue = '#cad9fb';
const green = '#ccfbca';

const data = {
  featureOne: {
    title: 'Powerful Design Tools',
    text:
      'Bring your brand image to life using Platformpro’s powerful and easy-to-use design tools. Customize everything from text to colour in the same space. Use our pre-built themes to jumpstart your design and create a beautiful site in minutes.',
  },
  featureTwo: {
    title: 'Work on Desktop and Mobile',
    text:
      'Everyone from your audience is watching on a different device, from phones, to Tv’s to desktop computers. Websites you build on Platformpro will look stunning anywhere your audience is, automatically.',
  },
  featureThree: {
    title: 'Powerful Analytics',
    text:
      'Learn about your audience with in-depth analytics, from watch time to page views, all in one place. Optimize your content with data from every member of your audience, from Twitter to Twitch.',
  },
  featureFour: {
    title: 'Everything and More',
    text:
      'Use Platformpro to help jumpstart your career. Look professional whether you’re getting your first follower or your first million. Platformpro sets you up for success with tools that scale to any size.',
  },
};

const Features = () => {
  const { darkMode } = useContext(themeContext);
  const [bg, setBg] = useState(orange);
  const [isOrangeArrow, setIsOrangeArrow] = useState(true);
  const [isBleuArrow, setIsBlueArrow] = useState(false);
  const [isRedArrow, setIsRedArrow] = useState(false);
  const [isGreenArrow, setIsGreenArrow] = useState(false);

  const [title, setTitle] = useState(data.featureOne.title);
  const [text, setText] = useState(data.featureOne.text);

  return (
    <Section id="features">
      <div className="sm_section-spacing">
        <h2 className="information-title sm_section-spacing">
          Everything you will ever need
        </h2>
        <div className="features-parent">
          <div className="features-boxes_container sm-container">
            <ul className="features-ul">
              <li className="features-li">
                <AnimatedCard weight={3} clickable={false}>
                  <div
                    style={{ backgroundColor: darkMode ? '#233343' : orange }}
                    className="features-svg_container bg-orange"
                    onMouseEnter={() => {
                      setBg(orange);
                      setIsOrangeArrow(true);
                      setIsBlueArrow(false);
                      setIsRedArrow(false);
                      setIsGreenArrow(false);
                      setTitle(data.featureOne.title);
                      setText(data.featureOne.text);
                    }}
                  >
                    <img
                      style={{
                        filter: darkMode ? 'invert(1) saturate(0)' : 'none',
                      }}
                      className="features-svg"
                      src={writer}
                      alt="browser"
                    />
                  </div>
                </AnimatedCard>
                <h4 className="features-h4">Beautiful</h4>
              </li>
              <li className="features-li">
                <AnimatedCard weight={3} clickable={false}>
                  <div
                    style={{ backgroundColor: darkMode ? '#233343' : blue }}
                    className="features-svg_container bg-blue"
                    onMouseEnter={() => {
                      setBg(blue);
                      setIsOrangeArrow(false);
                      setIsBlueArrow(true);
                      setIsRedArrow(false);
                      setIsGreenArrow(false);
                      setTitle(data.featureTwo.title);
                      setText(data.featureTwo.text);
                    }}
                  >
                    <img
                      style={{
                        filter: darkMode ? 'invert(1) saturate(0)' : 'none',
                      }}
                      className="features-svg"
                      src={browser}
                      alt="browser"
                    />
                  </div>
                </AnimatedCard>
                <h4 className="features-h4">Responsive</h4>
              </li>
              <li className="features-li">
                <AnimatedCard weight={3} clickable={false}>
                  <div
                    style={{ backgroundColor: darkMode ? '#233343' : red }}
                    className="features-svg_container bg-red"
                    onMouseEnter={() => {
                      setBg(red);
                      setIsOrangeArrow(false);
                      setIsBlueArrow(false);
                      setIsRedArrow(true);
                      setIsGreenArrow(false);
                      setTitle(data.featureThree.title);
                      setText(data.featureThree.text);
                    }}
                  >
                    <img
                      style={{
                        filter: darkMode ? 'invert(1) saturate(0)' : 'none',
                      }}
                      className="features-svg"
                      src={seo}
                      alt="browser"
                    />
                  </div>
                </AnimatedCard>
                <h4 className="features-h4">Analytical</h4>
              </li>
              <li className="features-li">
                <AnimatedCard weight={3} clickable={false}>
                  <div
                    style={{ backgroundColor: darkMode ? '#233343' : green }}
                    className="features-svg_container bg-green"
                    onMouseEnter={() => {
                      setBg(green);
                      setIsOrangeArrow(false);
                      setIsBlueArrow(false);
                      setIsRedArrow(false);
                      setIsGreenArrow(true);
                      setTitle(data.featureFour.title);
                      setText(data.featureFour.text);
                    }}
                  >
                    <img
                      style={{
                        filter: darkMode ? 'invert(1) saturate(0)' : 'none',
                      }}
                      className="features-svg"
                      src={rocket}
                      alt="browser"
                    />
                  </div>
                </AnimatedCard>
                <h4 className="features-h4">Powerful</h4>
              </li>
            </ul>
          </div>
          <div className="triangle-container sm-container">
            <div
              className="triangle"
              style={{
                borderBottom: `50px solid ${darkMode ? '#233343' : orange}`,
                opacity: isOrangeArrow ? 1 : 0,
              }}
            ></div>
            <div
              className="triangle"
              style={{
                borderBottom: `50px solid ${darkMode ? '#233343' : blue}`,
                opacity: isBleuArrow ? 1 : 0,
              }}
            ></div>
            <div
              className="triangle"
              style={{
                borderBottom: `50px solid ${darkMode ? '#233343' : red}`,
                opacity: isRedArrow ? 1 : 0,
              }}
            ></div>
            <div
              className="triangle"
              style={{
                borderBottom: `50px solid ${darkMode ? '#233343' : green}`,
                opacity: isGreenArrow ? 1 : 0,
              }}
            ></div>
          </div>
          <div
            className="features-info_container"
            style={{
              backgroundColor: darkMode ? '#233343' : bg,
              color: darkMode ? '#eef2f6' : '#101820',
            }}
          >
            <h3 className="features-h3">{title}</h3>
            <p className="features-p">{text}</p>
            <button className="btn-bg">start now</button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
