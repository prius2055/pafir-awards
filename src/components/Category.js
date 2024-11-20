import React from 'react';
import './Category.css';
import Ashafa from '../img/nomineeImages/ashafa.png';
import Sterling from '../img/nomineeImages/sterling.png';
import Omotoso from '../img/nomineeImages/omotoso.png';
import Hajara from '../img/nomineeImages/hajara.png';
import Troy from '../img/nomineeImages/troy.png';
import Elizabeth from '../img/nomineeImages/elizabeth.png';
import Babajide from '../img/nomineeImages/babajide.png';

const Category = () => {
  return (
    <div id="category">
      <h2>Award Categories</h2>
      <hr />

      <div className="special-category">
        <h2>Special Award Category</h2>
        <p className="category-paragraph">
          Special Recognition Award for Public Sector Players to honour and
          recognise public sector entities contributing significantly to the
          finance, ICT and real estate sectors.
        </p>

        <div className="category-grp">
          <div className="category-card">
            <img src={Ashafa} alt={`${Ashafa}`} />
            <h3>SENATOR BAREEHU OLUGBENGA ASHAFA </h3>
            <p>Fmr. Senator, Federal Republic of Nigeria</p>
          </div>
          <div className="category-card">
            <img src={Sterling} alt={`${Sterling}`} />
            <h3> (SIR), STERLING ELLIS</h3>
            <p>ACS, CHARTERED MCSI</p>
          </div>
          <div className="category-card">
            <img src={Omotoso} alt={`${Omotoso}`} />
            <h3>MR KAYODE OMOTOSO</h3>
            <p>
              Pioneer Executive Secretary/CEO, Mortgage Banking Association of
              Nigeria (MBAN)
            </p>
          </div>
          <div className="category-card">
            <img src={Hajara} alt={`${Hajara}`} />
            <h3>BAR. KADIRI, HAJARA AZALEA</h3>
            <p>LL.B, BL, MBA, CPPPS, MNIM, MNITD</p>
          </div>
          <div className="category-card">
            <img src={Troy} alt={`${Troy}`} />
            <h3>ANGELA TROY</h3>
            <p>Founder & CEO, Troy Consulting, </p>
          </div>
          <div className="category-card">
            <img src={Elizabeth} alt={`${Elizabeth}`} />
            <h3> MRS ELIZABETH EBI </h3>
            <p>GMD/CEO, Futureview Financial Services Ltd.</p>
          </div>
          <div className="category-card">
            <img src={Babajide} alt={`${Babajide}`} />
            <h3> DEACON DUROJAIYE BABAJIDE JOHN</h3>
            <p>MD & Founder,Legrande Properties Development Company Limited</p>
          </div>
        </div>
      </div>

      <div className="professional-category">
        <h2>Professional Award Category</h2>
        <p className="category-paragraph">
          Professional recognition Award for private and public sector players
          to honour and recognise individuals contributing significantly to the
          finance, ICT and real estate sectors.
        </p>

        <div className="category-grp">
          <div className="category-card-2">
            <h3>Real Estate</h3>

            <ol>
              <li className="card-item">
                Innovative Real Estate Project of the Year
              </li>
              <ul>
                <li>
                  Recognizes groundbreaking developments in design,
                  sustainability, and impact
                </li>
              </ul>
              <li className="card-item">Real Estate Developer of the Year</li>
              <ul>
                <li>
                  Awards excellence in project delivery, innovation, and market
                  influence.
                </li>
              </ul>
              <li className="card-item">Sustainable Real Estate Initiative</li>
              <ul>
                <li>
                  Celebrates significant advancements in sustainability within
                  the real estate sector
                </li>
              </ul>
              <li className="card-item">Best Commercial Real Estate Firm</li>
              <ul>
                <li>
                  Recognizes outstanding performance, client satisfaction, and
                  market leadership.
                </li>
              </ul>
              <li className="card-item">Rising Star in Real Estate</li>
              <ul>
                <li>
                  Honors emerging leaders or firms showing exceptional early
                  career accomplishments.
                </li>
              </ul>
            </ol>
          </div>
          <div className="category-card-2">
            <h3>ICT</h3>
            <ol>
              <li className="card-item">ICT Innovator of the Year</li>
              <ul>
                <li>
                  Recognizes significant transformative innovations in the ICT
                  landscape.
                </li>
              </ul>
              <li className="card-item">Best ICT Infrastructure Provider</li>
              <ul>
                <li>
                  Awards exceptional ICT infrastructure solutions enhancing
                  connectivity and efficiency.
                </li>
              </ul>
              <li className="card-item">Outstanding Cybersecurity Solution</li>
              <ul>
                <li>Celebrates remarkable advancements in cybersecurity.</li>
              </ul>
              <li className="card-item">Top ICT Service Provider</li>
              <ul>
                <li>
                  Honors outstanding ICT services demonstrating reliability and
                  customer satisfaction.
                </li>
              </ul>
              <li className="card-item">Rising Star in ICT</li>
              <ul>
                <li>
                  Acknowledges new talents in the ICT sector with notable early
                  achievements.
                </li>
              </ul>
            </ol>
          </div>
          <div className="category-card-2">
            <h3>Finance</h3>
            <ol>
              <li className="card-item">Financial Innovator of the Year</li>
              <ul>
                <li>
                  Recognizes groundbreaking financial products, services, or
                  technologies.
                </li>
              </ul>
              <li className="card-item">Best Investment Management Firm</li>
              <ul>
                <li>
                  Awards exceptional performance, client satisfaction, and
                  innovative strategies in investment management
                </li>
              </ul>
              <li className="card-item">Excellence in Fintech</li>
              <ul>
                <li>
                  Celebrates significant advancements in financial technology.
                </li>
              </ul>
              <li className="card-item">Outstanding Banking Institution</li>
              <ul>
                <li>
                  Honors banks excelling in customer service, financial
                  performance, and innovation.
                </li>
                <ul className="bank-types">
                  <li>Commercial Banking</li>
                  <li>Mortgage Banking</li>
                  <li>Microfinance Banking</li>
                </ul>
              </ul>
              <li className="card-item">Rising Star in Finance</li>
              <ul>
                <li>
                  Recognizes emerging talents or firms showing exceptional early
                  achievements in finance.
                </li>
              </ul>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
