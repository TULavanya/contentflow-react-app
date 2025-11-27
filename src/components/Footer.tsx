import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import { safeTextContent } from './ImageSync';

const Footer: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [footerData, setFooterData] = useState<any>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchContent('footer');
        console.log('📌 Footer data from Contentstack:', data);
        if (data && data.length > 0) {
          setFooterData(data[0]);
        }
      } catch (error) {
        console.error('Error loading footer content:', error);
      }
    };
    loadContent();
  }, [fetchContent]);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Platform</h4>
            <ul>
              <li><Link to="/platform">Platform Overview</Link></li>
              <li><a href="#">Solution Center</a></li>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Business Users</a></li>
              <li><Link to="/start">Developer Fast Track</Link></li>
              <li><Link to="/plans">Plans & Pricing</Link></li>
              <li><a href="#">ROI Calculator</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#">Retail</a></li>
              <li><a href="#">Travel & Tourism</a></li>
              <li><a href="#">Financial Services</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Manufacturing</a></li>
              <li><a href="#">E-commerce</a></li>
              <li><a href="#">Localization</a></li>
              <li><a href="#">Personalization</a></li>
              <li><a href="#">Portals & Knowledge Bases</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/academy">Academy</Link></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Product Updates</a></li>
              <li><Link to="/blogs">Blog</Link></li>
              <li><a href="#">Insights & Reports</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#">Podcasts</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Prompt Library</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Headless CMS</a></li>
              <li><a href="#">Composable DXP</a></li>
              <li><a href="#">CDP Integration</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Customers</h4>
            <ul>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Customer Care</a></li>
              <li><a href="#">Experience Awards</a></li>
            </ul>
            <br />
            <br />
            <h4>Partners</h4>
            <ul>
              <li><Link to="/partners">Partners Overview</Link></li>
              <li><Link to="/partners">Find a Partner</Link></li>
              <li><a href="#">Partner Login</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/company">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><a href="#">Press</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <br />
            <h4>Social</h4>
            <ul>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-meta">
          <div className="footer-legal">
            <a href="#">Legal</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookie Settings</a>
          </div>
          <div className="footer-bottom">
            <p>&copy; {safeTextContent(footerData?.footer_meta?.copyright_year, '2025')} {safeTextContent(footerData?.footer_meta?.company_name, 'ContentFlow')}. {safeTextContent(footerData?.footer_meta?.copyright_text, 'All rights reserved.')} </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


