import React from 'react';
import './Category.css';
import SanwoOlu from '../img/nomineeImages/governor_sanwoolu.png';
import Tambuwal from '../img/nomineeImages/aminu-tambuwa.png';
import MohamedMusa from '../img/nomineeImages/muhammed-musa.png';
import SalisuAfolabi from '../img/nomineeImages/salilu-afolabi.png';
import WaleEdun from '../img/nomineeImages/wale-edun.png';
import MusaDangiwa from '../img/nomineeImages/dangiwa-musa.png';
import BosunTijani from '../img/nomineeImages/bosun-tijani.png';
import VincentOlatunji from '../img/nomineeImages/vincent-olatunji.png';
import OyetundeOjo from '../img/nomineeImages/oyetunde-ojo.png';
import EmomotimiAgama from '../img/nomineeImages/emomotimi-agama.png';

const Category = () => {
  return (
    <div className="category">
      <h2>Award Categories</h2>
      <hr />

      <div className="professional-category">
        <h2>Professional Award Category</h2>
        <p className="category-paragraph">
          Professional recognition Award for private and public sector players
          to honour and recognise individuals contributing significantly to the
          finance, ICT and real estate sectors.
        </p>

        <div className="category-grp">
          {/* <div className="category-card">
          <h2>Category A (State Government)</h2>
          <p>
            Learn the use programming languages such as HTML, CSS, and
            JavaScript to create and style web pages, add interactivity and
            functionality, and ensure a seamless user experience. Build website
            and applications that are visually appealing, user-friendly, and
            accessible.
          </p>
        </div> */}
          {/* <div className="category-card">
          <h2>Category C (Legislature)</h2>
          <p>
            Learn Python, Ruby, Java, and PHP to develop server-side code, APIs,
            and databases. Create and maintain the infrastructure and systems
            that handle data processing, storage, and retrieval, as well as
            handling requests from the frontend and delivering responses.
          </p>
        </div> */}
          {/* <div className="category-card">
          <h2>Category D (Agencies)</h2>
          <p>
            Learn the process of conceptualizing, creating, and refining
            physical or digital product to meet the needs and expectations of
            its intended users. Learn figma
          </p>
        </div> */}

          <div className="category-grp">
            <div className="category-card">
              <h3>Real Estate</h3>
              <ol>
                <li>Innovative Real Estate Project of the Year</li>
                <ul>
                  <li>
                    Recognizes groundbreaking developments in design,
                    sustainability, and impact
                  </li>
                </ul>
              </ol>
              <ol>
                <li>Real Estate Developer of the Year</li>
                <ul>
                  <li>
                    Awards excellence in project delivery, innovation, and
                    market influence.
                  </li>
                </ul>
              </ol>
              <ol>
                <li>Sustainable Real Estate Initiative</li>
                <ul>
                  <li>
                    Celebrates significant advancements in sustainability within
                    the real estate sector
                  </li>
                </ul>
              </ol>
              <ol>
                <li>Best Commercial Real Estate Firm</li>
                <ul>
                  <li>
                    Recognizes outstanding performance, client satisfaction, and
                    market leadership.
                  </li>
                </ul>
              </ol>
              <ol>
                <li>Rising Star in Real Estate</li>
                <ul>
                  <li>
                    Honors emerging leaders or firms showing exceptional early
                    career accomplishments.
                  </li>
                </ul>
              </ol>
            </div>
            <div className="category-card">
              <h3>ICT</h3>
              <ol>
                <li>ICT Innovator of the Year</li>
                <ul>
                  <li>
                    Recognizes significant transformative innovations in the ICT
                    landscape.
                  </li>
                </ul>
              </ol>
              <ol>
                <li>Best ICT Infrastructure Provider</li>
                <ul>
                  <li>
                    Awards exceptional ICT infrastructure solutions enhancing
                    connectivity and efficiency.
                  </li>
                </ul>
              </ol>
              <ol>
                <li>Outstanding Cybersecurity Solution</li>
                <ul>
                  <li>Celebrates remarkable advancements in cybersecurity.</li>
                </ul>
              </ol>
              <ol>
                <li>Top ICT Service Provider</li>
                <ul>
                  <li>
                    Honors outstanding ICT services demonstrating reliability
                    and customer satisfaction.
                  </li>
                </ul>
              </ol>
              <ol>
                <li>Rising Star in ICT</li>
                <ul>
                  <li>
                    Acknowledges new talents in the ICT sector with notable
                    early achievements.
                  </li>
                </ul>
              </ol>
            </div>
            <div className="category-card">
              <h3>Finance</h3>
              <ol>
                <li>Financial Innovator of the Year</li>
                <ul>
                  <li>
                    Recognizes groundbreaking financial products, services, or
                    technologies.
                  </li>
                </ul>
              </ol>
              <ol>
                <li>Best Investment Management Firm</li>
                <ul>
                  <li>
                    Awards exceptional performance, client satisfaction, and
                    innovative strategies in investment management
                  </li>
                </ul>
              </ol>
              <ol>
                <li>Excellence in Fintech</li>
                <ul>
                  <li>
                    Celebrates significant advancements in financial technology.
                  </li>
                </ul>
              </ol>
              <ol>
                <li>Outstanding Banking Institution</li>
                <ul>
                  <li>
                    Honors banks excelling in customer service, financial
                    performance, and innovation.
                  </li>
                  <ol>
                    <li>Commercial Banking</li>
                    <li>Mortgage Banking</li>
                    <li>Microfinance Banking</li>
                  </ol>
                </ul>
              </ol>
              <ol>
                <li>Rising Star in Finance</li>
                <ul>
                  <li>
                    Recognizes emerging talents or firms showing exceptional
                    early achievements in finance.
                  </li>
                </ul>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="special-category">
        <h2>Special Award Category</h2>
        <p className="category-paragraph">
          Special Recognition Award for Public Sector Players to honour and
          recognise public sector entities contributing significantly to the
          finance, ICT and real estate sectors.
        </p>

        <div className="category-grp">
          <div className="category-card">
            <img src={SanwoOlu} alt="Governor Sanwo Olu" />
            <h3>His Excellency, Babajide Sanwo-Olu, </h3>
            <p>Executive Governor of Lagos State</p>
          </div>
          <div className="category-card">
            <img src={Tambuwal} alt="Sen. Aminu Tambuwal" />
            <h3> Sen. Aminu Tambuwal </h3>
            <p>Senate Committee on Housing and Urban Development</p>
          </div>
          <div className="category-card">
            <img src={MohamedMusa} alt="Sen. Sani Musa" />
            <h3>Sen. Sani Musa</h3>
            <p>Senate Committee on Finance</p>
          </div>
          <div className="category-card">
            <img src={SalisuAfolabi} alt="Sen. Afolabi Salisu" />
            <h3>Sen. Afolabi Salisu</h3>
            <p>Senate Committee on ICT Cyber Crimes</p>
          </div>
          <div className="category-card">
            <img src={WaleEdun} alt="Mr Wale Edun" />
            <h3>Mr Wale Edun</h3>
            <p>Hon. Minister of Finance</p>
          </div>
          <div className="category-card">
            <img src={MusaDangiwa} alt="Arc. Ahmed Musa Dangiwa" />
            <h3>Arc. Ahmed Musa Dangiwa</h3>
            <p>Hon. Minister of Housing and Urban Development</p>
          </div>
          <div className="category-card">
            <img src={BosunTijani} alt="Dr Bosun Tijani" />
            <h3>Dr Bosun Tijani</h3>
            <p>Hon. Minister of Communications, Innovation & Digital Economy</p>
          </div>
          <div className="category-card">
            <img src={VincentOlatunji} alt="Dr Vincent O. Olatunji" />
            <h3>Dr Vincent O. Olatunji</h3>
            <p>NC/CEO, Nigeria Data Protection Commission</p>
          </div>
          <div className="category-card">
            <img src={OyetundeOjo} alt="Mr Oyetunde Ojo" />
            <h3>Mr Oyetunde Ojo</h3>
            <p>MD/CEO, Federal Housing Authority</p>
          </div>
          <div className="category-card">
            <img src={EmomotimiAgama} alt="Mr Emomotimi Agama" />
            <h3>Mr Emomotimi Agama</h3>
            <p>DG, Security and Exchange Commission</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
