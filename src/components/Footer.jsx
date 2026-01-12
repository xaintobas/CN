import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FooterLogo } from "../assets/Assets";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="brand-column">
            <div className="brand-header">
              <FooterLogo />
            </div>
            <p className="brand-description">
              We design and build custom websites and software solutions that
              drive growth, engage users, and deliver real business results.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="column-title">Services</h4>
            <ul className="footer-nav-list">
              {[
                "Mobile Apps",
                "UI/UX Design",
                "Web Development",
                "Software Development",
                "SEO Optimization",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="column-title">Quick Links</h4>
            <ul className="footer-nav-list">
              {[
                "Who We Are",
                "What We Do",
                "Learn With Us",
                "Connect With Us",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="column-title">Contact Us</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span>+234 815 507 1646</span>
              </li>
              <li className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>hello@codenation.website</span>
              </li>
              <li className="contact-item align-start">
                <MapPin size={18} className="contact-icon icon-offset" />
                <span>Benin City, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright-section">
          <p>&copy; {currentYear} CodeNation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
