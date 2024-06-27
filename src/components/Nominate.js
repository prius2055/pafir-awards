import React from 'react';
import './Nominate.css';
import { MdAlternateEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaAddressBook } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Nominate = () => {
  return (
    <div className="nominee">
      <h2>Nomination process</h2>
      <p>
        The Pinnacle Awards for Finance, ICT, and Real Estate (PAFIR Awards)
        invites nominations from companies and individuals who have demonstrated
        exceptional performance and innovation in the fields of Finance, ICT and
        Real Estate. The nomination process is designed to be straightforward
        and transparent, ensuring a fair evaluation for all entrants.
      </p>
      <h3>Here’s how it works</h3>
      <div className="nomination-steps">
        <div className="step-card">
          <h4>1. Submission</h4>
          <p>
            Complete the online nomination form on our website, providing
            comprehensive details about the nominee’s achievements and
            contributions.
          </p>
        </div>

        <div className="step-card">
          <h4> 2. Evaluation</h4>
          <p>
            Our panel of industry experts and judges will meticulously review
            all submissions based on predefined criteria such as innovation,
            impact, and leadership.
          </p>
        </div>

        <div className="step-card">
          <h4> 3. Shortlisting</h4>
          <p>
            Shortlisted nominees will be announced on our website and social
            media channels.
          </p>
        </div>

        <div className="step-card">
          <h4> 4. Award Ceremony</h4>
          <p>
            Winners will be revealed and celebrated at the prestigious PAFIR
            Awards ceremony.
          </p>
        </div>
      </div>

      <button className="nomination-btn">Click here to nominate</button>

      <div className="events">
        <h2> Event Highlights</h2>
        <h4> Keynote Speeches</h4>
        <p>
          Hear from influential leaders and Finance, ICT, and Real Estate
          experts.
        </p>
        <h4> Networking Opportunities</h4>
        <p>
          Connect with industry peers, potential partners, and thought leaders.
        </p>
        <h4>Gala Dinner</h4>
        <p>
          Enjoy a luxurious dining experience while celebrating the achievements
          of the nominees and winners.
        </p>
      </div>
      <div id="contact">
        <h2>Contact</h2>
        <p>
          For more information about the PAFIR Awards, nominations, sponsorship
          opportunities, or event details, please get in touch with us
        </p>
        <div className="contact-info">
          <MdAlternateEmail /> <span>info@pafirawards.ng</span>
        </div>
        <div className="contact-info">
          <BsFillTelephoneFill /> <span>0803 973 5678</span>
        </div>
        <div className="contact-info">
          <FaAddressBook />
          <span> Address: 44 Obafemi Awolowo Way, Ikeja, Lagos</span>
        </div>
        <p>
          Follow us on social media to stay updated on the latest news and
          announcements
        </p>

        <div className="contact-icons">
          <a href="#">
            <FaFacebook className="icon" />
          </a>
          <a href="#">
            <FaTwitter className="icon" />
          </a>
          <a href="#">
            <FaLinkedin className="icon" />
          </a>
          <a href="#">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <footer>
        <p className="footer-quote">
          Join us in celebrating excellence, innovation, and leadership at the
          Pinnacle Awards for Finance, ICT, and Real Estate (PAFIR) 2024!
        </p>
        <div className="footer-link">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#category">Categories</a>
          <a href="#contact">Sponsorship</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="copyright"> &copy;PAFIR awards 2024</p>
      </footer>
    </div>
  );
};

export default Nominate;
