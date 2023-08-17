import { useState } from "react";
import "./about.css";
import Footer from "../../components/Footer";


const Olly = require ("../../images/Olly.jpg")
const Mic = require  ("../../images/Mic.jpg");
const Nick = require  ("../../images/Nick.jpg");
const Timi = require  ("../../images/Timi.jpg");


const About = () => {
  const [toggleTab, setToggleTab] = useState(1);

  const toggleState = (index) => {
    setToggleTab(index);
  };
  return (
    <>
      <section className="about">
        <div className="row">
          <div className="column">
            <div className="about-image"></div>
          </div>

          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab "
                }
                onClick={() => toggleState(1)}
              >
                <h2>About Us</h2>
              </div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab "
                }
                onClick={() => toggleState(2)}
              >
                <h2>Meet the team</h2>
              </div>
            </div>

            <div className="tab-contexxt">
              {/* About content */}

              <div
                className={
                  toggleTab === 1 ? "contexxt active-contexxt" : "contexxt"
                }
              >
                <h2>About Us</h2>

                <p>
                  Recognizing the paramount significance of transparency and
                  accountability in today's world, we often find ourselves
                  meticulously examining the allocation of funds, particularly
                  in the realm of grants and allowances. The pervasive issue of
                  misappropriated resources underscores the imperative to
                  address it effectively. This is precisely why we introduced
                  SVer, a pioneering web application powered by Bitcoin SV. This
                  innovation empowers organizations to dispense grants in BSV,
                  with a distinctive twist. The grants we allocate comes with
                  programmable attributes, affording administrators the
                  capability to enforce spending limitations. Curious about our
                  choice of BSV? It's simple. BSV is a blockchain tailored for
                  high transaction volumes and minimal fees, making it an ideal
                  fit for our application. Its formidable security framework and
                  transparent nature ensure that every transaction is traceable
                  and verifiable. Our budgeting app presents a suite of
                  distinctive competitive advantages, differentiating us within
                  the crowded marketplace. Unlike conventional budgeting tools
                  like Emma, Fudget, and YNAB, our app doesn't merely track
                  expenditures it takes a step further by restricting payments
                  beyond predefined thresholds and categories, furnishing a
                  concrete means of budget management.
                </p>

                <h3>
                  We are a Start up company with less than 10 staff at the
                  moment
                </h3>

                <p>Each staff has their unique abilities</p>
              </div>

              <div
                className={
                  toggleTab === 2 ? "contexxt active-contexxt" : "contexxt"
                }
              >
                <div className="team-column">
                  <img src={Olly} alt="Oluchi" />

                  <h3>Pearl</h3>

                  <span>CEO</span>

                  <p>
                    Pearl is the driving force at SVer, serving as CEO,
                    front-end developer, and data analyst. Her leadership shapes
                    our vision, while her front-end skills create seamless user
                    interfaces. Simultaneously, Pearl's data expertise extracts
                    insights that steer our success, embodying innovation at the
                    crossroads of technology and analytics.
                  </p>
                </div>

                <div className="team-column">
                  <img src={Mic} alt="Avatar" />

                  <h3>Micheal</h3>

                  <span>Front-end and Smart Contract Analyst</span>

                  <p>
                    Micheal combines expertise in front-end development and
                    blockchain technology. He designs user interfaces and
                    experiences for web applications using HTML, CSS, React and
                    JavaScript, while also evaluating and analyzing
                    blockchain-based smart contracts for security and
                    functionality. In this hybrid role he ensures seamless user
                    interactions while also ensureing the reliability and safety
                    of automated agreements on blockchain platforms.
                  </p>
                </div>

                <div className="team-column">
                  <img src={Timi} alt="Avatar" />

                  <h3>Rotimi</h3>

                  <span>Front-end Developer</span>

                  <p>
                    Rotimi is a skilled and dedicated front-end developer at
                    SVer, contributing to the creation of exceptional user
                    experiences. With a keen eye for design and a mastery of
                    HTML, CSS, and JavaScript, he crafts intuitive and visually
                    appealing interfaces for SVer's web applications. Rotimi's
                    expertise in responsive design ensures that users have a
                    consistent and engaging interaction across various devices.
                    His collaborative spirit and problem-solving abilities make
                    him an invaluable asset to the team, enhancing SVer's
                    commitment to delivering top-notch user interfaces in the
                    realm of blockchain technology.
                  </p>
                </div>

                <div className="team-column">
                  <img src={Nick} alt="Avatar" />

                  <h3>Nick</h3>

                  <span>Smart Contract Analyst</span>

                  <p>
                    Nick stands as a proficient Smart Contract (Scrypt)
                    Developer at SVer, contributing to the core of our
                    blockchain innovation. His expertise in crafting and
                    implementing secure and efficient smart contracts using
                    Scrypt technology drives our decentralized solutions. Nick's
                    meticulous coding, problem-solving prowess, and commitment
                    to blockchain security ensure that SVer's smart contracts
                    are reliable and aligned with the highest industry
                    standards. His role is integral to SVer's mission of
                    pioneering advancements in blockchain technology through
                    robust and functional smart contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
